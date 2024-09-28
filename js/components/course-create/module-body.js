class ModuleBody extends HTMLElement {
    constructor() {
        super();

        this.classList.add('module-body');
    }

    connectedCallback() {
        this.innerHTML = 
            `<div class="module">
                <div class="module-content">
                    <div class="module-header">
                        <h2 class="module-title-label">Módulo: </h2>
                        <input type="text" class="module-title">
                        <button class="module-delete-btn" type="button">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <ul class="lessons-content">

                    </ul>
                    <div class="add-lesson">
                        <button class="add-lesson-btn" type="button">Adicionar aula</button>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('module-body', ModuleBody);