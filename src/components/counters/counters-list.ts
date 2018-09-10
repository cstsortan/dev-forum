import { LitElement, html, property } from "@polymer/lit-element";
import { Counter } from "../../reducers/counter-reducer";
import { connect } from "../../utils/connect-mixin";
import { store } from "../../store";
import { addCounter } from "../../actions";

export class CountersList extends connect(store)(LitElement) {

    @property()
    counters!: Counter[];

    @property()
    globalCounter!: number;

    _stateChanged() {
        this.counters = store.getState().counterState.counters;
        this.globalCounter = store.getState().counterState.globalCounter;
    }

    render() {

        console.log("Counters: ", this.counters);

        const counterItems = this.counters.map(counter => html`
            <counter-item .counterState="${counter}" uid="${counter.id}"></counter-item>
        `);

        return html`
        <style>
        :host {
            display: block;
        }
        </style>
        <div>
            <h1>${this.globalCounter}</h1>
            <flat-btn @click="${() => store.dispatch(addCounter())}" color="primary">Add Counter</flat-btn>
        </div>
        <div>
            ${counterItems}
        </div>
        `;
    }
}

customElements.define('counters-list', CountersList);