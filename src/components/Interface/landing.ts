class InterfaceView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="../shared/common.css">
      </div>
      <div class="top_hotbar">
        <app-home></app-home>
        <app-searchbar></app-searchbar>
        <app-unloggedprofile></app-unloggedprofile>
      </div>
      <div class="grid">
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      <app-animationcard></app-animationcard>
      </div>
    `;
  }
}

customElements.define('interface-view', InterfaceView);
export default InterfaceView;