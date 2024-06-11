class PopupLessonEvaluate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="lesson-evaluate-content">
                <div class="close-popup-btn">
                    <button id="close-popup-lesson-evaluate">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="lesson-evaluate-title">
                    <h2>O que achou da aula?</h2>
                    <h3>Deixe sua avaliação aqui</h3>
                </div>
                <div class="evaluation-buttons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>`;
    }
}

customElements.define('popup-lesson-evaluate', PopupLessonEvaluate);

document.addEventListener('DOMContentLoaded', () => {
    const closePopupBtn = document.getElementById('close-popup-lesson-evaluate');
    const popup = document.getElementById('popup-lesson-evaluate');

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});