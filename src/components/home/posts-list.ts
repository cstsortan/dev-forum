import { LitElement, html, property } from "@polymer/lit-element";
import { Post } from "../../interfaces/post";
import { Subscription, iif, of } from "rxjs";
import { getState$ } from "../../utils/get-state";
import { store } from "../../store";
import { switchMap } from "rxjs/operators";
import { Route, routes } from "../../routes";

import {repeat} from 'lit-html/directives/repeat';
import { navigate, openPost } from "../../actions/router-actions";
import { selectPost } from "../../actions/posts-list-actions";

class PostsList extends LitElement {

    @property({reflect: false}) posts: Post[] = [];

    postChosen(post: Post) {
        store.dispatch(openPost(post));
        store.dispatch(selectPost(post));
    }

    render() {
        return html`
            <style>
            post-item {
                display: block;
            }
            </style>
            <div>
                ${repeat(this.posts, i => i.id, (post, i) => {
                    return html`<post-item
                    @click="${() => this.postChosen(post)}"
                    .post="${post}"></post-item>`;
                })}
            </div>
        `;
    }
}

customElements.define('posts-list', PostsList);