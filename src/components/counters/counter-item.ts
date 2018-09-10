import { LitElement, html, property } from "@polymer/lit-element";
import { store } from "../../store";
import { Counter } from "../../reducers/counter-reducer";
import { incrementCounter, deleteCounter } from "../../actions";

export class CounterItem extends LitElement {

    @property({
        reflect: false,
    })
    counterState!: Counter;

    render() {
        return html`
        <style>
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
        </style>
        <div class="card">
            <div class="card-header">
                This is some cool card <span>
                <flat-btn @click="${() => store.dispatch(deleteCounter({id: this.counterState.id}))}" class="deleteBtn" color="danger">x</flat-btn>
                </span>
            </div>
            <div class="counter-display">
                ${this.counterState.counter}
            </div>
            <div class="card-footer">
                <flat-btn @click="${() => store.dispatch(incrementCounter({id: this.counterState.id}))}" color="primary" class="addBtn" id="addBtn">
                    +
                </flat-btn>
            </div>
        </div>
        `;
    }

}

customElements.define('counter-item', CounterItem);