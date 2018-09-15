import { LitElement, html, property } from "@polymer/lit-element";
import { Tag } from "../../interfaces/tag";

export class DfTagOption extends LitElement {

    @property({reflect: false})
    tag!: Tag;

    constructor() {
        super();
        let tag = this.shadowRoot!.querySelector('span');
    }

    render() {
        return html`
        <style>
        :host {
            height: 54px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            font-size: 17px;
            padding-left: 20px;
        }
        .tagColor {
            height: 17px;
            width: 21px;
            margin-right: 8px;
            border-radius: 4px;
        }
        </style>
        <div .style="background-color: ${this.tag.colour}" class="tagColor"></div>
        <div class="tag">
        ${this.tag.name}</div>
        `
    }

}

customElements.define('df-tag-option', DfTagOption)