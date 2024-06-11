class NavbarHome extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div class="nav-content-left">
                <div class="logo">
                    <img src="../assets/logo/logo-ed-platform.png" alt="Logo da marca">
                </div>
            </div>
            <div class="nav-content-right"> 
                <div class="search-content">
                    <input type="text" id="search-content-input" placeholder="Pesquisar Conteúdo">
                    <button id="search-content-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <button class="notifications" id="notifications-btn">
                    <i class="fa-regular fa-bell"></i>
                </button>
        
                <div class="user-photo">
                    <img src="../assets/image/user-photo.jpeg" alt="Foto do usuário">
                </div>
            </div>`;
    }
}

/* <button id="open-sidebar-btn">
    <i id="open-sidebar-icon" class="fa-solid fa-bars"></i>
</button> */

customElements.define('navbar-home', NavbarHome);