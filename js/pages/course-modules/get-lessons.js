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
            if (lesson.active){
                const moduleContainer = document.querySelector(`.module[data-module-id="${moduleId}"]`);
        
                const lessonsOfModule = `
                    <a href="video-home.html?vimeoId=${lesson.vimeoVideoId}&moduleId=${moduleId}&lessonId=${lesson.id}" class="lesson-content">
                        <div class="lesson-status">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <ul class="lesson-name">${lesson.name}</ul>
                    </a>
                `;
                moduleContainer.querySelector('.module-lessons').insertAdjacentHTML('beforeend', lessonsOfModule);
            }
        });
    })
    .catch(error => {
        const moduleContainer = document.querySelector(`.module[data-module-id="${moduleId}"]`);
        const errorMsg = `<p class="error-message">${error.message}</p>`;

        moduleContainer.querySelector('.module-lessons').insertAdjacentHTML('beforeend', errorMsg);
    });
}