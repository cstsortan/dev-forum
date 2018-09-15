import { LitElement, html, property } from "@polymer/lit-element";
import { Tag } from "../../../interfaces/tag";
import { getTagsCol } from "../../../services/posts-service";
import { Subscription } from "rxjs";
import { store } from "../../../store";
import { navigate } from "../../../actions/router-actions";

class DfTagsList extends LitElement {
    
    @property({
        reflect: false,
    })
    tags: Tag[] = [];

    _sub!: Subscription;

    connectedCallback() {
        this._sub = getTagsCol().subscribe(tags => this.tags = tags);
    }

    disconnectedCallback() {
        this._sub.unsubscribe()
    }


    render() {
        return html`
        <div>
        <style>
        :host {
            display: block;
            width: 100%;
        }
        </style>
        ${this.tags.map(tag => {
            return html`
                <df-tag-card @click="${() => {
                    store.dispatch(navigate(tag))
                }}" .tag=${tag}></df-tag-card>
            `
        })}
        </div>
        `
    }
}

customElements.define('df-tags-list', DfTagsList);