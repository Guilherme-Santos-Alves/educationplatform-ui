class ModuleBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<div class="module">
                <div class="module-content">
                    <div class="module-header">
                        <h2 clas="">Modulo: </h2>
                        <input type="text" class="module-title">
                        <button class="module-delete-btn">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <ul class="lessons-content">

                    </ul>
                    <div class="add-lesson">
                        <button class="add-lesson-btn" type="button">adicionar aula</button>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('module-body', ModuleBody);