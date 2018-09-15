import { LitElement, html, property } from "@polymer/lit-element";
import { Post } from "../../interfaces/post";
import { getDummyPosts, getPosts, getPostsCol } from "../../services/posts-service";
import { Subscription, iif, of } from "rxjs";
import { getState$ } from "../../utils/get-state";
import { store } from "../../store";
import { switchMap } from "rxjs/operators";
import { Route, routes } from "../../routes";

class PostsList extends LitElement {

    @property() posts: Post[] = [];

    _postsSub!: Subscription;
    
    connectedCallback() {
        if((window as any).__posts) {
            this.posts = (window as any).__posts;
            console.log('Found some posts from server: ', (window as any).__posts)
        }
        // this._postsSub = getPostsCol().subscribe(posts => {
        //     this.posts = posts;
        // });

        getPosts().then(posts => this.posts = posts);

        this._postsSub = getState$(store).pipe(
            switchMap((state: any) => {
                const route = state.router as Route;
                if(route.tag === routes[0]) {
                    return getPostsCol();
                }
                if(route.routeName) {
                    return of([]);
                }
                return getPostsCol(route.tag!.id);
            })
        ).subscribe(posts => {
            this.posts = posts;
        });;

        // getDummyPosts().then(posts => this.posts = posts);
    }

    disconnectedCallback() {
        this._postsSub.unsubscribe();
    }

    render() {
        const listItems = this.posts.map(post => {
            return html`<post-item .post="${post}"></post-item>`;
        });
        return html`
            <style>
            post-item {
                display: block;
            }
            </style>
            <div>
                ${listItems}
            </div>
        `;
    }
}

customElements.define('posts-list', PostsList);