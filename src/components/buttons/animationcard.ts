import { getRandomCard } from '../../utils/randomCardGenerator';
import { Card } from '../../types/cardtype';
import { card } from '../../data/card';
import { changeInterface } from "../../Globals"
import { setSelectedCard } from '../../utils/selectedcard';

class AnimationCard extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const randomCard = getRandomCard();

    const cardTemplate = document.createElement('template');
    cardTemplate.innerHTML = `
    <link rel="stylesheet" type="text/css" href="../../../shared/common.css">
    <style>
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    :host {
        display: block;
        position: relative;
    }

    :root {
        --bg-color: #0F0F0F;
        --boder-color: rgb(51, 50, 50);
        --scroll-color: rgb(97, 96, 96);
        --input-focus-color: #1C62B9;
        --input-border-color: #969696;
        --input-bg-color: #121212;
        --input-color: #BBBBBB;
        --buntton-bg-color: #323232;
        --button-color: #999999;
        --icons-hover-focus-color: rgba(236, 231, 231, 0.2);
        --icon-gertie-color: #FFFF;
        --sidebar-hover-color: rgb(51, 50, 50);
        --sidebar-icon-color: rgb(139, 139, 139);
        --grid-bg-color: #181818;
        --grid-bg-after-color: rgba(14, 12, 14, 0.6);
    }


    .grid-media > a > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        display: block;
        border-radius: 7px;
    }

    .duration {
        position: absolute;
        top: 2%;
        right: 4%;
        padding: 4px;
        background-color: black;
        font-size: 11px;
        border-radius: 10px;
        z-index: 5;
    }

    .description {
        display: flex;
        padding-top: 0px;
    }

    .meta-title {
        font-weight: 500;
        margin-bottom: 1px;
        margin-top: 14px;
        margin-right: 10px;
        font-size: 16px;
    }

    .meta-like {
        display: flex;
        padding: 0px 18px;
        align-items: center;
        vertical-align: middle;
        margin: 2px;
    }

    .meta-like > .like {
        color: #D9D9D9;
        font-weight: lighter;
        position: absolute;
        top: 70%;
        right: 7%;
        transform: translateY(-50%);
        margin: 2px;
    }

    .link-info {
        color: #7A7A7A;
        margin-bottom: 60px;
    }

    .meta-author {
        font-weight: 500;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-right: 10px;
        font-size: 13px;
        color: var(--input-color);
        text-decoration: none;
    }

    .mi-enlace {
        text-decoration: none;
    }
</style>

        <div class="grid-media">
        <a>
            <img src="${randomCard.src}">
        </a>
            <span class="duration">${randomCard.duration}</span>
        </div>
        <div class="description">
            <div class="metadata">
                <h3 class="meta-title">${randomCard.name}</h3>
                <a class="mi-enlace" href="#">
                <h4 class="meta-author">${randomCard.author}</h4>
            </a>
            </div>
        </div>
    `;
    shadowRoot.appendChild(cardTemplate.content.cloneNode(true));


    this.addEventListener('click', () => {
        setSelectedCard(randomCard);
    });


    
    this.addEventListener('click', () => {
        changeInterface('player');
      });
    }
  }

customElements.define('app-animationcard', AnimationCard);
export default AnimationCard;

