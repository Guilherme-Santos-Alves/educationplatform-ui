function setupDeleteLessonEvents(){
    const lessons = document.querySelectorAll('.lesson');

    if (lessons.length > 0){
        lessons.forEach(lesson => {
            const deleteBtn = lesson.querySelector('.delete');
    
            deleteBtn.addEventListener('click', () => {
                Swal.fire({
                    title: "Tem certeza?",
                    text: "Essa ação é irreversível!",
                    icon: "warning",
                    showCancelButton: true,
                    iconColor: "#161021",
                    confirmButtonColor: "#9a67e1",
                    cancelButtonColor: "#161021",
                    confirmButtonText: "Sim, excluir!",
                    cancelButtonText: "Cancelar"
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        const lessonId = lesson.getAttribute('data-lesson-id');
                        deleteLesson(lessonId);
                    }
                });
            });
        });
    }
}

function deleteLesson(lessonId) {
    fetch(`https://localhost:7092/api/videolessons/${lessonId}`, {
        method: 'DELETE',
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

        if (response.status === 204) {
            Swal.fire({
                icon: 'success',
                text: 'Aula excluída com sucesso!',
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

function deleteNewLesson() {
    const allNewLessons = document.querySelectorAll('.new-lesson');

    allNewLessons.forEach(Lesson => {
        const deleteNewLsBtn = Lesson.querySelector('.delete-new-ls-btn');
        deleteNewLsBtn.addEventListener('click', () => {
            const parentLesson = deleteNewLsBtn.closest('.new-lesson');
            parentLesson.remove();
        });
    })
}