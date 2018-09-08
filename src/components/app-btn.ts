import { LitElement, html } from '@polymer/lit-element';

class AppBtn extends LitElement {
    text: string;

    static get properties() {
        return {
            text: String
        };
    }

    constructor() {
        super();
        this.text = '';
    }

    _render({text}: any) {
        return html`
            <div>
                <button>${text}</button>
            </div>
        `;
    }
}

window.customElements.define('app-btn', AppBtn);