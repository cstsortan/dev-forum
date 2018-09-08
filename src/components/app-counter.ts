import { CustomElement } from "../utils/custom-element";

@CustomElement({
    selector: 'app-counter',
    template: //html
    `
    <div class="card">
        <div class="card-header">
            This is some cool card <span><flat-btn class="deleteBtn" color="danger">x</flat-btn></span>
        </div>
        <div id="counter" class="counter-display">
            0
        </div>
        <div class="card-footer">
            <flat-btn color="primary" class="addBtn" id="addBtn">
                +
            </flat-btn>
        </div>
    </div>
    `,
    useShadow: true,
    style: //css
    `
        .card {
            padding: 10px;
            margin: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: #C1C1C1 solid 1px;
            border-radius: 4px;
        }
        .deleteBtn {
            display: inline-block;
        }
        .counter-display {
            font-size: 35px;
        }
    `,
})
export class AppCounter extends HTMLElement {
    // DOM Refs
    counterDiv!: HTMLDivElement | null;
    addBtn!: HTMLButtonElement | null;
    deleteBtn!: HTMLButtonElement | null;

    // State
    counter: number = 0;
    
    connectedCallback() {
        this.addBtn = this.shadowRoot!.querySelector("#addBtn");
        this.counterDiv = this.shadowRoot!.querySelector("#counter");
        this.deleteBtn = this.shadowRoot!.querySelector('.deleteBtn');
        this.initializeCounterState();
        this.addListenners();
    }

    initializeCounterState() {
        this.counter = 0;
    }

    addListenners() {
        if (!this.addBtn || !this.deleteBtn) return;
        this.addBtn.addEventListener('click', () => {
            this.counter++;
            this.renderCounter();
            this.dispatchEvent(new CustomEvent('counterIncreased', {}));
        });
        this.deleteBtn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('counterDeleted', {
                detail: this.counter,
            }))
        });
    }
    

    renderCounter() {
        if(!this.counterDiv) return;
        this.counterDiv.innerText = this.counter.toString();
    }
}