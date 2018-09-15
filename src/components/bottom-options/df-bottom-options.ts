import { LitElement, html, property } from "@polymer/lit-element";
import { Tag } from "../../interfaces/tag";
import { getTagsCol } from "../../services/posts-service";
import { store } from "../../store";
import { routes } from "../../routes";
import { navigate } from "../../actions/router-actions";
import { toggleBottomSheet } from "../../actions/layout-actions";



class DfBottomOptions extends LitElement {

    @property({
        reflect: false,
    })
    currentTag: Tag = routes[0];

    @property({reflect: false})
    tags: Tag[] = [];

    @property({
        reflect: false,
    }) 
    showTags: boolean = true;

    connectedCallback() {
        getTagsCol().subscribe(tags => this.tags = tags);
        this._updateStoreState();
        store.subscribe(() => {
            this._updateStoreState();
        });
    }

    _updateStoreState() {
        this.currentTag = store.getState().router.tag!;
    }

    render() {

        const tagsList = this.tags.map(tag => {
            return html`<df-tag-option
            class="${this.currentTag === tag ? 'enabled-route': ''}"
            @click="${() => {
                store.dispatch(navigate(tag))
                store.dispatch(toggleBottomSheet())
            }}"
            .tag="${tag}"></df-tag-option>`;
        });

        const staticRoutes = routes.map(route => {
            return html`<df-tag-option
            class="${this.currentTag === route ? 'enabled-route': ''}"
            @click="${() => {
                store.dispatch(navigate(route))
                store.dispatch(toggleBottomSheet())
            }}"
            .tag="${route}"></df-tag-option>`;
        })

        return html`
        <style>
            df-tag-option:hover {
                background-color: #ECEDEE;
                cursor: pointer;
                user-select: none;
                color: black;
            }
            .enabled-route {
                background-color: #4E92DF;
                color: white;
            }
        </style>
        <div>
        ${staticRoutes}
        ${this.showTags ? tagsList : null}
        </div>
        `
    }

}

customElements.define('df-bottom-options', DfBottomOptions)