class NewModule extends HTMLElement {
    constructor() {
        super();

        this.classList.add('new-module');
    }

    connectedCallback() {
        this.innerHTML = 
            `<div class="module-content">
                <div class="module-header">
                    <h2 class="module-title-label">Módulo: </h2>
                    <input type="text" class="module-title">
                    <button class="module-delete-btn" type="button">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                <div class="module-description">
                    <label for="">Descrição:</label>
                    <input type="text" class="module-desc">
                </div>
                <ul class="lessons-content">

                </ul>
                <div class="add-lesson">
                    <button class="add-lesson-btn" type="button">Adicionar aula</button>
                </div>
            </div>`;
    }
}

customElements.define('new-module', NewModule);