import './styles/home.css';

    class Home extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
        }

        connectedCallback() {
            this.render();
        }

        render() {
            const template = document.createElement("template");
            template.innerHTML = `
            <style>
            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

            .home {
                margin-bottom: 50px;
                padding: 0px 30px;
                display: flex;
                align-items: center;
                vertical-align: middle;
            }

            .home a {
                display: flex;
                align-items: center;
            }

            .home  img{
                padding-right: 10px;
                width: 200px;
                height: 56px;
                border-radius: 10%;
                object-fit: contain;
            }



        </style>
                <div class="home">
                    <a href="http://localhost:3000/dist/unlogged/">
                    <img src="../../src/assets/gertie_logo.png" alt="gertie">
                    </a>
                </div>
            `;

            this.shadowRoot?.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("app-home", Home);
    export default Home;
