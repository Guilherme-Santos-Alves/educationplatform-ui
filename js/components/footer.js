class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <footer class="ep-footer">
                <div id="footer-content">
                    <div id="footer-contacts">
                        <h1>logo</h1>
                        <p>it's all about your dream</p>
                        <div id="footer-social-media">
                            <a href="" class="footer-link" id="instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>

                            <a href="" class="footer-link" id="facebook">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="" class="footer-link" id="whatsapp">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <ul class="footer-list">
                        <li>
                            <h3>Front-End</h3>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/guilherme-santos-alves-50088b1a8/" target="_blank" class="footer-link">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://github.com/Guilherme-Santos-Alves/educationplatform-ui" target="_blank" class="footer-link">GitHub</a>
                        </li>
                    </ul>

                    <ul class="footer-list">
                        <li>
                            <h3>Back-End</h3>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vitor-santos-alves/" target="_blank" class="footer-link">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://github.com/vitxr10/educationplatform-api" target="_blank" class="footer-link">GitHub</a>
                        </li>
                    </ul>

                    <div id="footer-subscribe">
                        <h3>Inscrever-se</h3>
                        <p>
                            Fique por dentro das últimas novidades, promoções exclusivas e conteúdo especial diretamente no seu e-mail.
                        </p>
                        
                        <div id="input-group">
                            <input type="email" name="" id="subscriber-email">
                            <button>
                                <i class="fa-regular fa-envelope"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="footer-copyright">
                    &#169
                    2024 all rights reserved - Developed by Guilherme Santos Alves
                </div>
            </footer>`;
    }
}

customElements.define('ep-footer', Header);