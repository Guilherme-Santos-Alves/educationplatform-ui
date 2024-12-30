document.addEventListener('DOMContentLoaded', getCourseDescription);

function getCourseDescription() {
    fetch(`https://localhost:7092/api/courses/${courseId}`, {
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
    .then(courseData => {
        const courseDescriptionSection = document.querySelector('.course-description');
        courseDescriptionSection.innerHTML = courseData.data.name;
    })
    .catch(error => {
        const courseDescriptionSection = document.querySelector('.course-description');
        courseDescriptionSection.innerHTML = `<p class="error-message">${'Erro ao carregar a descrição: ' + error.message}</p>`;
    });
    
}