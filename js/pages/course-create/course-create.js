window.onload = () => {
    protectRoute('Administrator');
    getSubscriptions();
}

// window.addEventListener('beforeunload', function (event) {
//     event.preventDefault();
//     event.returnValue = '';
// });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#add-module-btn').addEventListener('click', () => {
        const moduleTitleField = document.querySelector('.module-title-field');
        
        if (moduleTitleField.value !== '') {
            const group = document.querySelector('.modules-container');
            const moduleBodyComp = '<module-body></module-body>';
            
            group.insertAdjacentHTML('beforeend', moduleBodyComp);

            let lastModule = group.lastElementChild;
            lastModule.querySelector('.module-title').value = moduleTitleField.value;

            deleteModule();
            moduleTitleField.value = '';

            const addLessonBtn = lastModule.querySelector('.add-lesson-btn');
            addLessonBtn.addEventListener('click', () => {
                const lessonsGroup = lastModule.querySelector('.lessons-content');
                const lessonBodyComp = '<lesson-body></lesson-body>';
                    
                lessonsGroup.insertAdjacentHTML('beforeend', lessonBodyComp);

                deleteLesson();
            });
        } else {
            showToast('Para adicionar um módulo o campo do título não pode estar vazio!', 'alert');
        }
    });
});

function deleteModule() {
    const moduleDeleteBtn = document.querySelectorAll('.module-delete-btn');

    moduleDeleteBtn.forEach( deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const parentModule = deleteBtn.closest('.module');
            parentModule.remove();
        });
    });
}

function deleteLesson() {
    const lessonDeleteBtn = document.querySelectorAll('.lesson-delete-btn');

    lessonDeleteBtn.forEach( deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const parentModule = deleteBtn.closest('.lesson-group');
            parentModule.remove();
        });
    });
}

function clearFormData() {
    const fieldsOfForm = ['input', 'textarea'];

    if (document.querySelectorAll('.module-body')){
        const allModules = document.querySelectorAll('.module-body');
        
        allModules.forEach( moduleBody => {
            moduleBody.remove();
        });
    }
    
    fieldsOfForm.forEach(field => {
        const clearField = document.querySelectorAll(field);
        
        clearField.forEach(el => {
            el.value = '';
        });
    });
}