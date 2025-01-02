document.addEventListener('DOMContentLoaded', getLessonName);

function getLessonName() {
    fetch(`https://localhost:7092/api/videolessons/${lessonId}`, {
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
    .then(lesson => {
        const lessonFooter = document.querySelector('.lesson-footer');
        lessonFooter.querySelector('.lesson-title').innerHTML = `<h2>${lesson.data.name}</h2>`
    })
    .catch(error => {
        const lessonFooter = document.querySelector('.lesson-footer');
        const errorMsg = `<p class="error-message" style="color: white;">${'Erro ao carregar o título da aula: ' + error.message}</p>`;
        lessonFooter.querySelector('.lesson-title').innerHTML = errorMsg;
    });
}