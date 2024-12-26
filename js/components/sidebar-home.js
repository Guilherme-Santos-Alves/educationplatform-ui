class SidebarHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

            <nav id="ep-sidebar" class="sidebar p-3">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <a href="course-update.html" data-tooltip="Início">
                            <i class="fa-solid fa-house"></i>
                        </a>
                        <span class="item-description">
                            Início
                        </span>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="user-account.html" data-tooltip="Perfil">
                            <i class="fa-regular fa-user"></i>
                        </a>
                        <span class="item-description">
                            Perfil
                        </span>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="" data-tooltip="Suporte">
                            <i class="fa-regular fa-message"></i>
                        </a>
                        <span class="item-description">
                            Suporte
                        </span>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="course-certificates.html" data-tooltip="Certificados">
                            <i class="fa-solid fa-medal"></i>
                        </a>
                        <span class="item-description">
                            Certificados
                        </span>
                    </li>
                    <button id="logout-btn" data-tooltip="Sair">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <span class="item-description">
                            Sair
                        </span>
                    </button>
                </ul>
            </nav>
            `;
    }
}

customElements.define('ep-sidebar-home', SidebarHome);

/* <button id="toggleSidebar" class="btn btn-primary mb-3">Toggle Sidebar</button>

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('ep-sidebar');
    const content = document.getElementById('main-content');

    toggleButton.addEventListener('click', () => {
        console.log('Botão de toggle clicado');
        sidebar.classList.toggle('sidebar-hidden');
        content.classList.toggle('content-expanded');
    });
    
}); */
