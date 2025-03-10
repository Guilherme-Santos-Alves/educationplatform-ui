class NewModule extends HTMLElement {
    constructor() {
        super();

        this.classList.add('new-module');
    }

    connectedCallback() {
        this.innerHTML = 
            `<div class="new-md-content">
                <div class="new-md-header">
                    <h3 class="new-md-title">Novo Módulo: </h3>
                    <button type="button" class="delete-new-md-btn">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <div class="mb-3">
                    <label class="form-label">Nome:</label>
                    <input type="text" class="new-md-name" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Descrição:</label>
                    <input type="text" class="new-md-desc" required>
                </div>
            </div>`;
    }
}

customElements.define('new-module', NewModule);