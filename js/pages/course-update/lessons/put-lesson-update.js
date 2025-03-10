function LessonUpdate() { 
    const formLessonEdit = document.querySelector('#form-lesson-edit');
    const allLessons = formLessonEdit.querySelectorAll('.lesson');

    allLessons.forEach(lesson => {
        const inputLesson = lesson.querySelector('.ls-name');
        const id = inputLesson.getAttribute('data-lesson-id');

        putLessonUpdate(inputLesson.value, id);
    });
}

function putLessonUpdate(name, lessonId) { 
    const jsonData = {
        id: parseInt(lessonId),
        name: name,
        description: 'teste'
    }

    fetch(`https://localhost:7092/api/videolessons/${lessonId}`, {
        method: 'PUT',
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

        if (response.status === 204) {
            Swal.fire({
                icon: 'success',
                text: 'Aula atualizada com sucesso!',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                location.reload();
            });

            return null;
        }

        return response.json();
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            text: `${error.message}`,
            showConfirmButton: true,
        });
    });
}