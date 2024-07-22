class AllCoursesSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="all-courses-section">
                <div class="choose-course-content">
                    <div class="course">
                        <div class="course-picture">
                            <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
                        </div>
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-picture">
                            <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
                        </div>
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-picture">
                            <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
                        </div>
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-picture">
                            <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
                        </div>
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-picture">
                            <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
                        </div>
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-picture">
                            <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
                        </div>
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('all-courses-section', AllCoursesSection);

