
import "./components/export";
import { assets } from "./data/data";
import { getRandomCard } from "./utils/randomCardGenerator";
import { changeInterface } from "./Globals"
import { state } from "./Globals"
import { getSelectedCard } from "./utils/selectedcard";

export class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.renderInterface();
        console.log(getSelectedCard);
    }

    renderInterface() {
        const shadowRoot = this.shadowRoot;
        if (!shadowRoot) return;

        while (shadowRoot.firstChild) {
            shadowRoot.removeChild(shadowRoot.firstChild);
        }

        if (state.currentInterface === 'view') {
            const viewElement = document.createElement('interface-view');
            shadowRoot.appendChild(viewElement);
        } else if (state.currentInterface === 'player') {
            const playerElement = document.createElement('interface-player');
            shadowRoot.appendChild(playerElement);
        }
    }
}

customElements.define('app-container', AppContainer);
export default AppContainer;
