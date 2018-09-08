import { CustomElement } from "../utils/custom-element";
import { FlatBtn } from './flat-btn';

@CustomElement({
    selector: 'app-root',
    template: //html
    `
        <div>
            <h1>0</h1>
            <flat-btn color="primary">Add Counter</flat-btn>
        </div>
    `,
    style: //css
    `
        :host {
            display: block;
        }
    `,
})
class AppRoot extends HTMLElement {
    addCounterBtn!: FlatBtn | null;
    globalCounterH1!: HTMLHeadingElement | null;

    globalCounter = 0;
    
    componentWillMount () {
        this.addCounterBtn = this.querySelector('flat-btn');
        this.globalCounterH1 = this.querySelector('h1');
        this.addListenners();
    }

    addListenners() {
        this.addCounterBtn!.addEventListener('click', e => {
            this.addCounter();
        });
    }

    addCounter() {
        const newCounter = document.createElement('app-counter');
        newCounter.addEventListener('counterIncreased', e => {
            this.globalCounter++;
            this.renderGlobalCounter();
        });
        newCounter.addEventListener('counterDeleted', (e: any) => {
            this.globalCounter -= e.detail;
            this.renderGlobalCounter();
            this.removeChild(newCounter);
        });
        this.appendChild(newCounter);
    }

    renderGlobalCounter() {
        this.globalCounterH1!.textContent = this.globalCounter.toString();
    }
    
}