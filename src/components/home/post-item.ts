import { LitElement, html, property } from "@polymer/lit-element";
import { Post } from "../../interfaces/post";

class PostItem extends LitElement {

    @property({
        reflect: false,
    }) post!: Post;

    render() {
        return html`
        <style>
            .post-item {
                margin-left: 10px;
                margin-top: 10px;
            }
        </style>
        <div>
            <div class="post-item">
                <h3>${this.post.author!.name || "Someone"}</h3>
                <p>${this.post.text}</p>
            </div>
        </div>
        `;
    }

}

customElements.define('post-item', PostItem);