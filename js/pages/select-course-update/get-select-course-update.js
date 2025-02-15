function getSelectCourseUpdate() {
    fetch(`https://localhost:7092/api/courses`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(courses => {
        courses.data.forEach(course => {
            const courseContainer = document.querySelector('.choose-course-content');

            const courseBody = `
                <div class="course" data-course-id="${course.id}">
                    <div class="course-picture">
                        <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
                    </div>
                    <div class="course-title">
                        <h1>${course.name}</h1>
                    </div>
                    <div class="course-btn">
                        <a href="course-update.html?courseId=${course.id}">
                            <span>
                                <i class="fa-regular fa-edit"></i>
                            </span>
                            Editar curso
                        </a>
                    </div>
                </div>
            `;

            courseContainer.insertAdjacentHTML('beforeend', courseBody);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar os cursos:', error);

        const courseContainer = document.querySelector('.choose-course-content');
        courseContainer.innerHTML = `
            <p class="error-message">Não foi possível carregar os cursos. Tente novamente mais tarde.</p>
        `;
    });
};