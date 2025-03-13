document.addEventListener('DOMContentLoaded', () => {
    const formlessonEdit = document.querySelector('#form-lesson-edit');
    formlessonEdit.addEventListener('submit', (e) => {
        e.preventDefault();

        const newlessons = document.querySelectorAll('.new-lesson');

        if (newlessons.length !== 0){
            haveNewLessons(newlessons);
        }
    });
});

function postNewLesson(jsonDataLesson) {
    console.log('post', jsonDataLesson);

    fetch(`https://localhost:7092/api/videolessons`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(jsonDataLesson)
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                text: 'Aula cadastrada com sucesso!',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
               location.reload();
            });
        }

        if (!response.ok) {
            return response.json().then(error => {
                throw error;
            });
        }
        return response.json();
    })
    .catch(error => {
        for (let field in error.errors) {
            if (error.errors.hasOwnProperty(field)) {
                error.errors[field].forEach(errorMessage => {
                    Swal.fire({
                        text: `Não foi possível cadastrar um ou mais aulas: ${errorMessage}`,
                        icon: "error"
                    });
                });
            }
        }
    });
}

function setupNewLessonEvents(){
    const btnNewlesson = document.querySelector('#add-lesson-btn');
    btnNewlesson.addEventListener('click', () => {
        console.log('add');
        const lessonContainer = document.querySelector('.lessons');
        const newlesson = '<new-lesson></new-lesson>';
        lessonContainer.insertAdjacentHTML('beforeend', newlesson);

        deleteNewLesson();
    });
}

function haveNewLessons(newLessons) {


    console.log('chegou', newLessons);

    newLessons.forEach(lesson => {
        const lsName = lesson.querySelector('.new-ls-name');
        const lsDesc = lesson.querySelector('.new-ls-desc');
        const lsLink = lesson.querySelector('.new-ls-link');
        const moduleSelected = document.querySelector('#module-select');

        const jsonData = {
            moduleId: moduleSelected.value,
            name: lsName.value,
            description: lsDesc.value,
            video: lsLink.value
        }

        postNewLesson(jsonData); 
    });

}

function deleteNewLesson() {
    console.log('del new ls');
    const allNewLessons = document.querySelectorAll('.new-lesson');

    allNewLessons.forEach(Lesson => {
        const deleteNewLsBtn = Lesson.querySelector('.delete-new-ls-btn');
        deleteNewLsBtn.addEventListener('click', () => {
            const parentLesson = deleteNewLsBtn.closest('.new-lesson');
            parentLesson.remove();
        });
    })
}
