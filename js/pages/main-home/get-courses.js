window.onload = () => {
    protectRoute('both');
    getCourse();
}

function getCourse() {
    fetch(`https://localhost:7092/api/courses`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorText => {
                const error = new Error(errorText);
                error.status = response.status;
                throw error;
            });
        }
        return response.json();
    })
    .then(courses => {
        const courseContainer = document.querySelector('.choose-course-content');
        courseContainer.innerHTML = '';
    
        let hasActiveCourses = false;
    
        courses.data.forEach(course => {
            if (course.active) {
                hasActiveCourses = true;
    
                const courseBody = `
                    <div class="course" data-course-id="${course.id}">
                        <div class="course-picture">
                            <img src="${course.cover}" alt="">
                        </div>
                        <div class="course-title">
                            <h1>${course.name}</h1>
                        </div>
                        <div class="course-btn">
                            <a href="course-module.html?courseId=${course.id}">Ver curso</a>
                        </div>
                    </div>
                `;
    
                courseContainer.insertAdjacentHTML('beforeend', courseBody);
            }
        });
    
        if (!hasActiveCourses) {
            courseContainer.innerHTML = `
                <p class="error-message">Nenhum curso encontrado.</p>
            `;
        }
    })
    .catch(error => {
        console.error('Erro ao buscar os cursos:', error);
    
        const courseContainer = document.querySelector('.choose-course-content');
        
        let errorMessage = `<p class="error-message">Não foi possível carregar os cursos. Tente novamente mais tarde.</p>`;
        
        if (error.status === 404) {
            errorMessage = `<p class="error-message">Nenhum curso encontrado.</p>`;
        }

        courseContainer.innerHTML = errorMessage;
    });
};