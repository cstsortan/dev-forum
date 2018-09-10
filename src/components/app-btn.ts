import { LitElement, html, property } from '@polymer/lit-element/lit-element.js';

class AppBtn extends LitElement {

    @property() counter: number = 0;

    constructor() {
        super();
    }

    render() {
        return html`
            <div>
                <style>
                    h1 {
                        color: red;
                    }
                </style>
                <h1>${this.counter}</h1>
                <ion-button @click="${() => this.increment()}">+</ion-button>
            </div>
        `;
    }
    increment(): void {
        this.counter++;
    }
}

window.customElements.define('app-btn', AppBtn);