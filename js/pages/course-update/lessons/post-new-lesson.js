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
            return response.text().then(errorText => {
                const error = new Error(errorText);
                error.status = response.status;
                throw error;
            });
        }
        return response.json();
    })
    .catch(error => {
        if (error.status === 500){
            Swal.fire({
                text: `Não foi possível cadastrar uma ou mais aulas: Url inválida`,
                icon: "error"
            });
        } else {
            Swal.fire({
                text: `Não foi possível cadastrar uma ou mais aulas: ${error.message}`,
                icon: "error"
            });
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