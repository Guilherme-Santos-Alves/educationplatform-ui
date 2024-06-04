class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="ep-sidebar-content">
                <ul id="side-itens">
                    <li class="side-item">
                        <a href="">
                            <i class="fa-solid fa-house"></i>
                            <span class="item-description">
                                Início
                            </span>
                        </a>
                    </li>
                    <li class="side-item">
                        <a href="">
                            <i class="fa-regular fa-user"></i>
                            <span class="item-description">
                                Perfil
                            </span>
                        </a>
                    </li>
                    <li class="side-item">
                        <a href="">
                            <i class="fa-regular fa-message"></i>
                            <span class="item-description">
                                Suporte
                            </span>
                        </a>
                    </li>
                    <li class="side-item">
                        <a href="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                            <span class="item-description">
                                Pesquisar
                            </span>
                        </a>
                    </li>
                    <li class="side-item">
                        <a href="">
                            <i class="fa-solid fa-medal"></i>
                            <span class="item-description">
                                Certificados
                            </span>
                        </a>
                    </li>
                    <button id="logout-btn">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <span class="item-description">
                            Sair
                        </span>
                    </button>
                </ul>            
            </div>`;
    }
}

customElements.define('ep-sidebar-home', Nav);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('open-sidebar-btn').addEventListener('click', () => {
        document.getElementById('ep-sidebar').classList.toggle('open-ep-sidebar');
    })
})