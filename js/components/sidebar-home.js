class SidebarHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="ep-sidebar" class="sidebar p-3">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <a href="course-update.html" data-tooltip="Início">
                            <i class="fa-solid fa-house"></i>
                        </a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="user-account.html" data-tooltip="Perfil">
                            <i class="fa-regular fa-user"></i>
                        </a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="" data-tooltip="Suporte">
                            <i class="fa-regular fa-message"></i>
                        </a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="course-certificates.html" data-tooltip="Certificados">
                            <i class="fa-solid fa-medal"></i>
                        </a>
                    </li>
                    <button id="logout-btn" data-tooltip="Sair">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </ul>
            </nav>
            `;
    }
}

customElements.define('ep-sidebar-home', SidebarHome);


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('ep-sidebar');
    const content = document.getElementById('content');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-hidden');
        content.classList.toggle('content-expanded');
    });
});
