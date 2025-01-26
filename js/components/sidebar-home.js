

class SidebarHome extends HTMLElement {
    connectedCallback() {
        if (userRole === 'student'){
            this.innerHTML = `
            <nav id="ep-sidebar" class="sidebar p-3">
                <ul class="nav flex-column">
                    <a class="nav-item mb-2" href="main-home.html" data-tooltip="Início">
                        <span>
                            <i class="fa-solid fa-house"></i>
                        </span>
                        <span class="item-description">
                            Início
                        </span>
                    </a>
                    <a class="nav-item mb-2" href="user-account.html" data-tooltip="Perfil">
                        <span >
                            <i class="fa-regular fa-user"></i>
                        </span>
                        <span class="item-description">
                            Perfil
                        </span>
                    </a>
                    <a class="nav-item mb-2" href="" data-tooltip="Suporte">
                        <span>
                            <i class="fa-regular fa-message"></i>
                        </span>
                        <span class="item-description">
                            Suporte
                        </span>
                    </a>
                    <a class="nav-item mb-2" href="course-certificates.html" data-tooltip="Certificados">
                        <span class="nav-icon">
                            <i class="fa-solid fa-medal"></i>
                        </span>
                        <span class="item-description">
                            Certificados
                        </span>
                    </a>
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

        if(userRole === 'Administrator'){
            this.innerHTML = `
            <nav id="ep-sidebar" class="sidebar p-3">
                <ul class="nav flex-column">
                    <a class="nav-item mb-2" href="main-home.html" data-tooltip="Início">
                        <span>
                            <i class="fa-solid fa-house"></i>
                        </span>
                        <span class="item-description">
                            Início
                        </span>
                    </a>
                    <a class="nav-item mb-2" href="user-account.html" data-tooltip="Perfil">
                        <span >
                            <i class="fa-regular fa-user"></i>
                        </span>
                        <span class="item-description">
                            Perfil
                        </span>
                    </a>
                    <a class="nav-item mb-2" href="course-create.html" data-tooltip="Criar curso">
                        <span >
                            <i class="fa-regular fa-clone"></i>
                        </span>
                        <span class="item-description">
                            Criar curso
                        </span>
                    </a>
                    <a class="nav-item mb-2" href="select-course-update.html" data-tooltip="Editar Curso">
                        <span >
                            <i class="fa-regular fa-edit"></i>
                        </span>
                        <span class="item-description">
                            Editar Curso
                        </span>
                    </a>
                    <a class="nav-item mb-2" href=".html" data-tooltip="Assinaturas">
                        <span class="nav-icon">
                            <i class="fas fa-money-check-alt plan-icon"></i>
                        </span>
                        <span class="item-description">
                            Assinaturas
                        </span>
                    </a>
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
