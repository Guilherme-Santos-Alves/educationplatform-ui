class AllCoursesSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="all-courses-section">
                <div class="choose-course-content">
                    
                </div>
            </div>`;
    }
}

customElements.define('all-courses-section', AllCoursesSection);