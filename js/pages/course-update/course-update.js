function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const courseId = getQueryParam('courseId');

document.addEventListener('DOMContentLoaded', () => {
    const formLessonEdit = document.querySelector('#form-lesson-edit');
    
    formLessonEdit.addEventListener('submit', (e) => {
        e.preventDefault();
        LessonUpdate();

        
        
        
    })

    
})