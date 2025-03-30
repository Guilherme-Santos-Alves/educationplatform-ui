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
        courses.data.forEach(course => {
            if (course.active){
                const courseContainer = document.querySelector('.choose-course-content');
                courseContainer.innerHTML = '';

                const courseBody = `
                    <div class="course" data-course-id="${course.id}">
                        <div class="course-picture">
                            <img src="https://miro.medium.com/v2/resize:fit:1358/0*VYGU5sx8ET8hbar1" alt="">
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
            } else {
                const courseContainer = document.querySelector('.choose-course-content');
                courseContainer.innerHTML = '';
                courseContainer.innerHTML = `
                    <p class="error-message">Nenhum curso encontrado.</p>
                `;
            }
        });
    })
    .catch(error => {
        
        console.error('Erro ao buscar os cursos:', error);
        console.log(error);

        const courseContainer = document.querySelector('.choose-course-content');
        courseContainer.innerHTML = '';
        courseContainer.innerHTML = `
            <p class="error-message">Não foi possível carregar os cursos. Tente novamente mais tarde.</p>
        `;

        if (error.status === 404){
            courseContainer.innerHTML = `
                <p class="error-message">Nenhum curso encontrado.</p>
             `;
        }
        
    });
};


{/* <div class="choose-course-content">
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
</div> */}