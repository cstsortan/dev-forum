import { LitElement, html, property } from "@polymer/lit-element";
import { store } from "../../store";
import { Route, routes } from "../../routes";
import { toggleBottomSheet } from "../../actions/layout-actions";
import { navigate } from "../../actions/router-actions";
import { Post } from "../../interfaces/Post";

export class HomePage extends LitElement {
    @property({
        reflect: false,
    })
    scrolled!: boolean ;

    @property({
        reflect: false,
    })
    route!: Route;

    @property({
        reflect:false,
    })
    sheetOpen: boolean = true;

    @property({
        reflect: false,
    })
    posts!: Post[];

    @property({reflect: false})
    selectedPost!: Post | null;

    connectedCallback() {
        document.addEventListener('scroll', (e: any) => {
            this.scrolled = e.target.scrollingElement.scrollTop > 0;
        });
        this._stateChanged();
        store.subscribe(() => {
            this._stateChanged();
        });
    }

    _stateChanged() {
        this.route = store.getState().router;
        this.sheetOpen = store.getState().layout.sheetOpen;
        this.posts = store.getState().postsList.posts;
        this.selectedPost = store.getState().postsList.selectedPost;
    }

    openNewPostForm() {
        if(store.getState().auth) {
            store.dispatch(navigate('new-post'));
        }
        else {
            store.dispatch(navigate('auth'));
        }
    }

    render() {
        if(!this.route.tag) {
            if(this.route.routeName === "new-post") {
                return html`
                    <df-post-form></df-post-form>
                `;
            }
            else if(this.route.routeName === 'auth') {
                return html`
                    <df-auth></df-auth>
                `;
            }
            else if(this.route.routeName === 'post-page') {
                return html`<post-page .post="${this.selectedPost}"></post-page>`;
            } else {
                return html`
                    <h1>Hold on! This route isn't there yet!</h1>
                `;
            }
        }

        const showBottomTags = this.route.tag.id !== 'tags';

        let renderedPage;
        if(this.route.tag.id === 'tags') {
            renderedPage = html`
            <df-tags-list>Tags...</df-tags-list>
            `;
        } else {
            renderedPage = html`
            <posts-list .posts="${this.posts}" class="no-scroll"></posts-list>
            `;
        }

        return html`
        <style>
            app-bar {
                position: fixed;
                display: block;
                width: 100%;
                top: 0;
                left: 0;
                right: 0;
                transition: box-shadow 0.2s;
                z-index: 1;
            }
            posts-list, df-tags-list {
                display: block;
                position: absolute;
                top: 46px;
                width: 100%;
                height: calc(100% - 46px);
            }
            .shadow {
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
            }
            .btn-new-post {
                padding: 5px;
            }
        </style>
        <app-bar class="${this.scrolled ? 'shadow' : ''}">
            <div @click="${() => this.openNewPostForm()}" class="btn-new-post" slot="end">
                +
            </div>
            <div @click="${() => this.handleBarTitleClick()}">${this.route.tag.name}</div>
        </app-bar>
        ${renderedPage}
        <bottom-sheet
            @bs-close="${() => this.handleSheetClose()}" 
            .open="${this.sheetOpen}">
            <df-bottom-options
            .showTags="${showBottomTags}"></df-bottom-options>
        </bottom-sheet>
        `;
    }

    handleBarTitleClick() {
        console.log("Clicked");
        store.dispatch(toggleBottomSheet());
        // document.body.style.overflowY = 'hidden';
    }

    handleSheetClose() {
        store.dispatch(toggleBottomSheet());
        // document.body.style.overflowY = 'unset';
    }
}

customElements.define('home-page', HomePage);