class PopupLessonEvaluate extends HTMLElement {
    connectedCallback() {
        return(
            <div class="nav-content-left">
                <div class="logo">
                </div>
                <div class="search-content">
                    <button id="search-content-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <button class="notifications" id="notifications-btn">
                    <i class="fa-regular fa-bell"></i>
                </button>
            </div>
        )
        
    }
}

customElements.define('popup-lesson-evaluate', PopupLessonEvaluate);

// document.addEventListener('DOMContentLoaded', () => {
//     const closePopupBtn = document.getElementById('close-popup-lesson-evaluate');
//     const popup = document.getElementById('popup-lesson-evaluate');

//     closePopupBtn.addEventListener('click', () => {
//         popup.style.display = 'none';
//     });
// });