class NewLesson extends HTMLElement {
    constructor() {
        super();

        this.classList.add('new-lesson');
    }

    connectedCallback() {
        this.innerHTML = 
            `<div class="new-ls-content">
                <div class="new-ls-header">
                    <h3 class="new-ls-title">Nova Aula: </h3>
                    <button type="button" class="delete-new-ls-btn">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <div class="mb-3">
                    <label class="form-label">Nome:</label>
                    <input type="text" class="new-ls-name" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Descrição:</label>
                    <input type="text" class="new-ls-desc" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Link da aula:</label>
                    <input type="text" class="new-ls-link" required>
                </div>
            </div>`;
    }
}

customElements.define('new-lesson', NewLesson);