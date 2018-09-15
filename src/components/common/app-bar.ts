import { LitElement, html } from "@polymer/lit-element";
import { CustomElement } from "../../utils/custom-element";

@CustomElement({selector: 'app-bar'})
export class AppBar extends LitElement {
    render() {
        return html`
        <style>
        .app-bar-style {
            
            display: flex;
            width: 100%;
            height: 46px;
            background: #FFFFFF;
            border-bottom-color: #ECEDEE;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            justify-content: space-between;
            user-select: none;
        }
        .app-bar-title {
            color: #6EA6E5;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            flex: 1;
            cursor: pointer;
        }
        .app-bar-title:active {
            opacity: 0.6;
        }
        .action-create-post {
            align-self: center;
            flex: 0;
            color: #7A8185;
            font-size: 18px;
            cursor: pointer;
        }
        .drawer {
            flex: 0;
            color: #7A8185;
            font-size: 18px;
            cursor: pointer;
        }
        </style>
        <div class="app-bar-style sticky">
            <div>
            <slot name="start"></slot>
            </div>
            <div class="app-bar-title">
            <slot></slot>
            </div>
            <div class="action-create-post">
                <slot name="end"></slot>
            </div>
        </div>
        `;
    }
}