document.addEventListener('DOMContentLoaded', () => {
    const moduleSelect = document.querySelector('#module-select');
    moduleSelect.addEventListener('change', () => {
        editFields();
    });
});

function LessonUpdate() { 
    const formLessonEdit = document.querySelector('#form-lesson-edit');
    const allLessons = formLessonEdit.querySelectorAll('.lesson');

    allLessons.forEach(lesson => {
        const inputLesson = lesson.querySelector('.ls-name');
        const id = inputLesson.getAttribute('data-lesson-id');

        putLessonUpdate(inputLesson.value, id);
    });
}

function lessonFields() {
    const formLessonEdit = document.querySelector('#form-lesson-edit');
    const allLessons = formLessonEdit.querySelectorAll('.lesson');

    allLessons.forEach( lesson => {

        const inputName = lesson.querySelector('.ls-name');
        const inputDesc = lesson.querySelector('.ls-desc');

        inputName.addEventListener('input', () => {
            lesson.setAttribute("data-ls-changed", "true");
        });

        inputDesc.addEventListener('input', () => {
            lesson.setAttribute("data-ls-changed", "true");
        });
    });
}

function putLessonUpdate(changedLessons) { 
    console.log("ls-alterada", changedLessons);
    changedLessons.forEach(lesson => {
        const jsonData = {
            id: lesson.id,
            name: lesson.name,
            description: lesson.description
        }

        fetch(`https://localhost:7092/api/videolessons/${lesson.id}`, {
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
    })
}