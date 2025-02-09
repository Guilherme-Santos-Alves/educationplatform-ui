function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const moduleId = getQueryParam('moduleId');

document.addEventListener('DOMContentLoaded', getLessonsOfModule);

function getLessonsOfModule() {
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
            const lessonContainer = document.querySelector('.module-lesson-list');

            const lessonBody = `
                <a href="video-home.html?vimeoId=${lesson.vimeoVideoId}&moduleId=${moduleId}&lessonId=${lesson.id}" class="module-lesson">
                    <iframe class="lesson-thumb"
                        src="https://player.vimeo.com/video/${lesson.vimeoVideoId}?badge=0&autopause=0&transparent=0&controls=0&autoplay=0&loop=0&muted=0&byline=0&title=0&player_id=0&app_id=58479" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        title="Video Player">
                    </iframe>
                    
                    <h2 class="lesson-title">${lesson.name}</h2>
                </a>`;

            lessonContainer.insertAdjacentHTML('beforeend', lessonBody);
        });
    })
    .catch(error => {
        const lessonContainer = document.querySelector('.module-lesson-list');
        const errorMsg = `<p class="error-message">${'Erro ao carregar a aula: ' + error.message}</p>`;

       lessonContainer.insertAdjacentHTML('beforeend', errorMsg);
    });
}