window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#course-register-form').addEventListener('submit', () => {
        courseRegister();
    });
});

const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzMxMTM5NjUxLCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.A8TJDuOmyQRbUiGKw59_K2qAJn_JdGjueg3We_gmK94";

function courseRegister() {
    const nameOfCourse = document.getElementById('course-title');
    const descriptionOfCourse = document.getElementById('course-description');
    const coverOfCourse = document.getElementById('course-cover');

    const jsonDataCourse = {
        subscriptionId: 1,
        name: nameOfCourse.value,
        description: descriptionOfCourse.value,
        cover: coverOfCourse.value
    }

    console.log('curso' + JSON.stringify(jsonDataCourse));

    fetch(`https://localhost:7092/api/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(jsonDataCourse)
    })
    .then( response => {
        if (response.ok) {
            response.json().then(( id ) => {
                const courseId = id;
                moduleAndLessonRegister(courseId);
                showToast('Curso cadastrado com sucesso! <br> Você pode editar os cursos que criou na seção "Meus cursos".', 'success');
                if (!document.querySelector('.module-body')){
                    clearFormData();
                }
            });
        } else {
            return response.json().then(error => {
                throw error;
            });
        }
    })
    .catch( error => {
        for (let field in error.errors) {
            if (error.errors.hasOwnProperty(field)) {
                error.errors[field].forEach((errorMessage) => {
                    showToast('Não foi possível cadastrar o curso: ' + errorMessage, 'error');
                });
            }
        }
    });
}

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

function moduleAndLessonRegister(courseId) {
    const allModules = document.querySelectorAll('.module');

    allModules.forEach( module => {
        const moduleName = module.querySelector('.module-title');

        const jsonDataModule = {
            courseId: courseId,
            name: moduleName.value,
            description: 'teste'
        }

        console.log('modulo' + JSON.stringify(jsonDataModule));
        
        fetch(`https://localhost:7092/api/modules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
            body: JSON.stringify(jsonDataModule)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw error;
                });
            }
            return response.json();
        })
        .then(moduleId => {
            if (!document.querySelector('.lesson-group')){
                clearFormData();
            }

            const allLessons = module.querySelectorAll('.lesson-group');

            allLessons.forEach(lesson => {
                const lessonName = lesson.querySelector('.video-lesson-name');
                const lessonLink = lesson.querySelector('.video-lesson-link');
                const lessonDescription = lesson.querySelector('.video-lesson-description');

                const jsonDataLessons = {
                    name: lessonName.value,
                    description: lessonDescription.value,
                    video: lessonLink.value,
                    moduleId: moduleId
                };

                console.log('aula' + JSON.stringify(jsonDataLessons));

                fetch(`https://localhost:7092/api/videolessons`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokenJwt}`
                    },
                    body: JSON.stringify(jsonDataLessons)
                })
                .then(response => {
                    if (response.ok) {
                        showToast('Aula cadastrada com sucesso!', 'success');
                    } else {

                        return response.json().then(error => {
                            throw error;
                        });
                    }
                    clearFormData();
                })
                .catch(error => {
                    console.log('deu ruim na aula', error);
                
                    if (error.errors) {
                        for (let field in error.errors) {
                            if (error.errors.hasOwnProperty(field)) {
                                error.errors[field].forEach(errorMessage => {
                                    console.log('chama o toast');
                                   showToast('Não foi possível cadastrar uma ou mais aulas: ' + errorMessage, 'error');
                                });
                            }
                        }
                    } else {
                        console.log('Estrutura de erro inesperada');
                        showToast('Não foi possível cadastrar uma ou mais aulas.', 'error');
                    }
                });
            });
        })
        .catch(error => {
            for (let field in error.errors) {
                if (error.errors.hasOwnProperty(field)) {
                    error.errors[field].forEach(errorMessage => {
                        showToast('Não foi possível cadastrar um ou mais módulos: ' + errorMessage, 'error');
                    });
                }
            }
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

// adicionar btn de remover aula -- ok
// cadastrar modulo junto com aula -- ok
// required de aula -- ok
// clear formdata apos fetch --ok
// toast de erro nao possivel dadastrar uma ou mais aulas --ok
// arrumar nome do form --ok