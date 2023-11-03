import { AppContainer } from './index';


export const state = {
    currentInterface: 'view'
};

function changeInterface(view: string) {
    state.currentInterface = view;
    renderInterface();
}

function renderInterface() {
    const appContainer = document.querySelector('app-container') as AppContainer;
    if (appContainer) {
        appContainer.renderInterface();
    }
}


document.addEventListener('click', function (event: MouseEvent) {
    if (event.target && (event.target as HTMLElement).tagName.toLowerCase() === 'app-animationcard') {
        changeInterface('player');
    }
});

export { changeInterface, renderInterface };
