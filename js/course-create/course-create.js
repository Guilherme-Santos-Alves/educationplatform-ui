// window.addEventListener('beforeunload', function (event) {
//     event.preventDefault();
//     event.returnValue = '';
// });
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.course-create-inputs').addEventListener('submit', () => {
        courseRegister();
    });
});

function courseRegister() {
    const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzI2OTk1MzIwLCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.sFjOkxtk7reNFbNd4QyNS1ZvjPiSEp0HvryZ9rbXdk0";
    
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
        response.json().then(( id ) => {
            const courseId = id;
            moduleAndLessonRegister(courseId);
            showToast('Curso cadastrado com sucesso', 'success'); //exemplo
        });
    })
    .catch( error => showToast(error, 'error'));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#add-module-btn').addEventListener('click', () => {
        const moduleTitleField = document.querySelector('.module-title-field');
        
        if (moduleTitleField.value !== '') {
            const group = document.querySelector('.modules-container');
            const moduleBodyTag = '<module-body></module-body>';
            
            group.insertAdjacentHTML('beforeend', moduleBodyTag);

            let lastModule = group.lastElementChild;
            lastModule.querySelector('.module-title').value = moduleTitleField.value;

            deleteModule();

            const addLessonBtn = lastModule.querySelector('.add-lesson-btn');
            addLessonBtn.addEventListener('click', () => {
                const lessonsGroup = lastModule.querySelector('.lessons-content');
        
                const lessonBody = `
                    <div class="lesson-group">
                        <div class="lesson-header">
                            <h1>Aula</h1>
                            <button class="lesson-delete-btn" type="button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                        <div class="input-labels">
                            <label for="">Nome da aula:</label>
                            <label for="">Link da aula:</label>
                            <label for="">Descrição da aula:</label>
                        </div>
                        <div class="fields">
                            <input class="video-lesson-name" type="text" required>
                            <input class="video-lesson-link" type="text" required>
                            <input class="video-lesson-description" type="text" required>
                        </div>
                    </div>`;
            
                lessonsGroup.insertAdjacentHTML('beforeend', lessonBody);

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
    const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzI2OTk1MzIwLCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.sFjOkxtk7reNFbNd4QyNS1ZvjPiSEp0HvryZ9rbXdk0";

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
                    throw error; // Lança o erro para ser capturado no catch
                });
            }
            return response.json();
        })
        .then(moduleId => {
            // cadastrar aula

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
                        showToast('sucesso aula', 'success');
                    }

                    if (!response.ok) {
                        // Se o status da resposta não for 2xx, lançar um erro
                         // exemplo de sucesso
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json(); // converter para JSON
                })
                .catch(error => {
                    console.log(error); // Logar o erro para depuração
                    showToast('Uma ou mais aulas não cadastradas: ' + error, 'error');  // Exibir toast de erro
                });
                
            });
        })
        .catch(error => {
            console.error('Erro:', error.title); // "One or more validation errors occurred."
            console.error('Status:', error.status); // 400
            console.error('Trace ID:', error.traceId); 
        

            for (let field in error.errors) {
                if (error.errors.hasOwnProperty(field)) {
                    error.errors[field].forEach((errorMessage) => {
                        showToast(errorMessage, 'error');
                        
                        
                        
                        
                    });
                }
            }
        });
        
    })
}


// adicionar btn de remover aula -- ok
// cadastrar modulo junto com aula -- ok
// required de aula -- ok
// clear formdata apos fetch ..pending
// toast de erro nao possivel dadastrar uma ou mais aulas ..pending
// arrumar nome do form