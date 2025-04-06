document.addEventListener('DOMContentLoaded', () => {
    const finishLessonBtn = document.querySelector('#lesson-finish-btn');

    finishLessonBtn.addEventListener('click', () => {
        showEvaluationModal();
    })
})

function postLessonFinished(lessonRating) {
    const jsonData = {
        videoLessonId: parseInt(getQueryParam('lessonId')),
        userId: JSON.parse(localStorage.getItem('userSession')).userId,
        nota: lessonRating
    }

    console.log(jsonData);

    fetch(`https://localhost:7092/api/videoLessons/${jsonData.videoLessonId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorText => {
                throw new Error(errorText);
            });
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            text: `${error.message}`,
            showConfirmButton: true,
        });
    });
}