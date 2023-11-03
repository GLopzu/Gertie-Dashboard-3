

class UnloggedProfile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const unloggedprofile = document.createElement("template");
        unloggedprofile.innerHTML = `
        <style>

        .unprofile{
            margin-bottom: 50px;
            display: flex;
            align-items: center;
        }

        .unprofile a{
            margin-top: 10px;
            margin-bottom: 10px
            margin-left: 100px;
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .unprofile .button-perfil{
            margin-left: 50px;
        }

        .unprofile .button-perfil img{
            padding-right: 10px;
            width: 50px;
            height: 50px;
            border-radius: 10%;
            object-fit: cover;
        }

        .sidebar.expanded {
            width: 350px; 
            transition: width 0.3s; 
        }
        
        
        </style>
        <div class="unprofile">
            <a href="../register/index.html" class="button-perfil">
                <img src="../../src/assets/icon_profile.png" alt="perfil">
            </a>
        </div>
    `;


    this.shadowRoot?.appendChild(unloggedprofile.content.cloneNode(true));
    }
    
}

customElements.define("app-unloggedprofile", UnloggedProfile);
export default UnloggedProfile;