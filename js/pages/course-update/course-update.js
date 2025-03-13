function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const courseId = getQueryParam('courseId');

document.addEventListener('DOMContentLoaded', () => {
    const formLessonEdit = document.querySelector('#form-lesson-edit');
    
    formLessonEdit.addEventListener('submit', (e) => {
        e.preventDefault();
        //LessonUpdate();

       // e.preventDefault();

        const allLessons = document.querySelectorAll('.lesson');
        const changedLessons = [];

        allLessons.forEach(lesson => {
            if (lesson.getAttribute('data-ls-changed')) {
                const inputName = lesson.querySelector('.ls-name');
                const inputDesc = lesson.querySelector('.ls-desc');
                const lessonId = inputName.getAttribute('data-lesson-id');

                changedLessons.push({
                    id: Number(lessonId),
                    name: inputName.value,
                    description: inputDesc.value
                });
            }
        });

        console.log(changedLessons);

        if (changedLessons.length > 0) {
            putLessonUpdate(changedLessons);
        } else {
            console.log("Nenhuma aula foi alterada.");
        }
        
        
    })

    
})