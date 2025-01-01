function getLessonsByModule (moduleId) {
    fetch(`https://localhost:7092/api/videolessons/module/${moduleId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorText => {
                throw new Error(errorText);
            });
        }
        return response.json();
    })
    .then(lessons => {
        lessons.data.forEach(lesson => {
            const moduleContainer = document.querySelector(`.module[data-module-id="${moduleId}"]`);
    
            const lessonsOfModule = `
                <a href="video-home.html?lessonUrl=${lesson.videoLink}&moduleId=${moduleId}" class="lesson-content">
                    <div class="lesson-status">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <ul class="lesson-name">${lesson.name}</ul>
                </a>
            `;
            moduleContainer.querySelector('.module-lessons').insertAdjacentHTML('beforeend', lessonsOfModule);
        });
    })
    .catch(error => {
        const moduleContainer = document.querySelector(`.module[data-module-id="${moduleId}"]`);
        const errorMsg = `<p class="error-message">${'Erro ao carregar a aula: ' + error.message}</p>`;

        moduleContainer.querySelector('.module-lessons').insertAdjacentHTML('beforeend', errorMsg);
    });
}