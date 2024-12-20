function editFields () {
    console.log('chamou');

    let editButtons = document.querySelectorAll('.edit');

    document.querySelector('#form-lesson-edit').addEventListener('click', (event) => {
    if (event.target.closest('.edit')) {
        const button = event.target.closest('.edit');
        const parentWithLsName = button.closest('.lesson');
        if (parentWithLsName) {
            const inputLsName = parentWithLsName.querySelector('.ls-name');
            inputLsName.disabled = !inputLsName.disabled;
        }
    }
});


    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentWithCsName      = button.closest('.name');
            const parentWithCsDesc      = button.closest('.description');
            const parentWithCsCover     = button.closest('.cover');
            const parentWithCsSubscription = button.closest('.subscription');

            if (parentWithCsName) {
                const inputName = parentWithCsName.querySelector('#cs-name');
                console.log(inputName);
                inputName.disabled = !inputName.disabled;
            } else if (parentWithCsDesc) {
                const inputDesc = parentWithCsDesc.querySelector('#cs-desc');
                inputDesc.disabled = !inputDesc.disabled;
            } else if (parentWithCsCover) {
                const inputCover = parentWithCsCover.querySelector('#cs-cover');
                inputCover.disabled = !inputCover.disabled;
            } else if (parentWithCsSubscription) {
                const inputSignature = parentWithCsSubscription.querySelector('#cs-subscription');
                inputSignature.disabled = !inputSignature.disabled;
            }


            const parentWithMdName = button.closest('.module');
            if (parentWithMdName) {
                const inputMdName = parentWithMdName.querySelector('.md-name');
                inputMdName.disabled = !inputMdName.disabled;
            }

            const parentWithLsName = button.closest('.lesson');
            if (parentWithLsName) {
                const inputLsName = parentWithLsName.querySelector('.ls-name');
                inputLsName.disabled = !inputLsName.disabled;
            }
        });
    });

    const courseData = {
        name: document.querySelector('#cs-name'),
        description: document.querySelector('#cs-desc'),
        cover: document.querySelector('#cs-cover'),
        subscription: document.querySelector('#cs-subscription')
    };
    
    Object.keys(courseData).forEach(key => {
        courseData[key].addEventListener('change', () => {
            const courseValues = {
                //id: sessionStorage.getItem('courseId'),
                id: 2,
                name: courseData.name.value,
                description: courseData.description.value,
                cover: courseData.cover.value,
                //subscription: courseData.subscription.value
            };
    
            sessionStorage.setItem('courseData', JSON.stringify(courseValues));
        });
    });
    
    const allModules = document.querySelectorAll('.md-name');
    allModules.forEach( module => {
        module.addEventListener('change', () => {
            const moduleData = {
                id: module.dataset.moduleId,
                name: module.value
            };

            let changedModules = [];

            if (sessionStorage.hasOwnProperty('changedModules')){
                changedModules = JSON.parse(sessionStorage.getItem('changedModules'));
            }

            const existingModuleIndex = changedModules.findIndex(item => item.id === moduleData.id);
            if (existingModuleIndex !== -1) {
                changedModules[existingModuleIndex].name = moduleData.name;
            } else {
                changedModules.push(moduleData);
            }

            sessionStorage.setItem('changedModules', JSON.stringify(changedModules));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const formCurso = document.querySelector('#form-course-edit');
    formCurso.addEventListener('submit', (e) => {
        e.preventDefault();
        if (sessionStorage.getItem('courseData')){
            const courseData = JSON.parse(sessionStorage.getItem('courseData'));
            putCourseUpdate(courseData);
        }
    });

    const formModule = document.querySelector('#form-module-edit');
    formModule.addEventListener('submit', (e) => {
        e.preventDefault();
        if (sessionStorage.getItem('changedModules')){
            const changedModules = JSON.parse(sessionStorage.getItem('changedModules'));
            putModuleUpdate(changedModules);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnNewModule = document.querySelector('#add-module-btn');
    btnNewModule.addEventListener('click', () => {
        const moduleContainer = document.querySelector('.modules');
        const newModule = '<new-module></new-module>';
        moduleContainer.insertAdjacentHTML('beforeend', newModule);
        deleteModule();
    });
});

function deleteModule() {
    const moduleDeleteBtn = document.querySelectorAll('.module-delete-btn');
    moduleDeleteBtn.forEach( deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const parentModule = deleteBtn.closest('.new-module');
            parentModule.remove();
        });
    });
}