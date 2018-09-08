import { CustomElement } from "../utils/custom-element";

@CustomElement({
    selector: 'flat-btn',
    template: //html
    `
        <button class="btn">
            <slot></slot>
        </button>
    `,
    useShadow: true,
    style: //css
    `
    :host {
        display:inline-block;
    }
    .btn {
        border: none;
        border-radius: 3px;
        padding: 6px 16px;
        color: white;
    }
    .primary {
        background-color: var(--primary-color);
    }

    .secondary {
        background-color: var(--secondary-color);
    }

    .danger {
        background-color: var(--danger-color);
    }
    `,
})
export class FlatBtn extends HTMLElement {
    btnElem!: HTMLButtonElement | null;

    color: string = '';

    componentWillMount() {
        this.btnElem = this.shadowRoot!.querySelector("button.btn");
        this.btnElem!.classList.add(this.getAttribute('color') || '');
    }
}