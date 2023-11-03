import { getRandomCard } from '../../utils/randomCardGenerator';
import { Card } from '../../types/cardtype';
import { card } from '../../data/card';
import { modifyYouTubeIframe } from "../../utils/iframedit"
import { getSelectedCard } from '../../utils/selectedcard';

class AnimationPlayer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // const randomCard = getRandomCard();

    const selectedCard = getSelectedCard();

    if (selectedCard) {
    const cardplayer = document.createElement('template');
    cardplayer.innerHTML = `
    <style>
      .video_player {
        width: 100%;
        max-width: 100vw;
        overflow: hidden;
        margin-top: 60px;
      }

      .video_player iframe {
        display: block;
        width: 100vw;
        height: 540px;
        border: none;
      }

      .info .profile_info {
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-top: 30px;
      }

      .info .profile_info .profile-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .info .profile_info .profile-link {
        font-family: 'Roboto', sans-serif;
        color: white;
        font-weight: 600;
        margin-left: 10px;
        text-decoration: none;
      }
      </style>
      <div class="video_player">
        ${selectedCard.iframe}
      </div>
      <div class="info">
        <div class="profile_info">
          <img src="${selectedCard.icon}" class="profile-image">
          <a href="" class="profile-link">${selectedCard.author}</a>
        </div>
      </div>
    `;

    shadowRoot.appendChild(cardplayer.content.cloneNode(true));
    }
  }
  }

customElements.define('app-animationplayer', AnimationPlayer);
export default AnimationPlayer;

