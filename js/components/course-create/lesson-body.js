class LessonBody extends HTMLElement {
    constructor() {
        super();

        this.classList.add('lesson-group');
    }

    connectedCallback() {
        this.innerHTML = 
            `<div class="lesson-header">
                <h1>Aula</h1>
                <button class="lesson-delete-btn" type="button">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <div class="input-labels">
                <label for="">Nome da aula:</label>
                <label for="">Descrição da aula:</label>
                <label for="">Link da aula:</label>
            </div>
            <div class="fields">
                <input class="video-lesson-name" type="text" required>
                <input class="video-lesson-description" type="text" required>
                <input class="video-lesson-link" type="text" required>
            </div>`;
    }
}

customElements.define('lesson-body', LessonBody);