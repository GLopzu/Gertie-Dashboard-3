class InterfacePlayer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `        <link rel="stylesheet" type="text/css" href="../shared/common.css">
      <style>

      .top_hotbar {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 70px;
        z-index: 2020;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 50px 10px;

    }
      
      </style>
      <div class="top_hotbar">
      <app-home></app-home>
      <app-searchbar></app-searchbar>
      <app-unloggedprofile></app-unloggedprofile>
      </div>
      <div>
          <app-animationplayer></app-animationplayer>
      </div>`;
    }
  }
  
  customElements.define('interface-player', InterfacePlayer);
  export default InterfacePlayer;