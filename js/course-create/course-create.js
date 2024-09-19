// window.addEventListener('beforeunload', function (event) {
//     console.log('A página está prestes a ser recarregada.');
//     event.preventDefault();
//     event.returnValue = '';
// });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.send-form-btn').addEventListener('click', () => {
        courseRegister();
    });
});

function courseRegister() {
    const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzI0OTY3NDE0LCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.8T4I_VD7mNIQtyOwg6fWg7uGSRMQcE7FHdKbwzH_oQA";
    
    const nameOfCourse = document.getElementById('course-title');
    const descriptionOfCourse = document.getElementById('course-description');
    const coverOfCourse = document.getElementById('course-cover');

    const jsonDataCourse = {
        subscriptionId: 1,
        name: nameOfCourse.value,
        description: descriptionOfCourse.value,
        cover: coverOfCourse.value
    }

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
        });
    })
    .catch( error => console.log('Erro:', error));
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
            alert('Para adicionar um módulo o campo do título não pode estar vazio!'); //toast no lugar do alert
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
    console.log("chegou");
    const lessonDeleteBtn = document.querySelectorAll('.lesson-delete-btn');
    console.log(lessonDeleteBtn);

    lessonDeleteBtn.forEach( deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            console.log('clicou');
            const parentModule = deleteBtn.closest('.lesson-group');
            parentModule.remove();
        });
    });
}

function moduleAndLessonRegister(courseId) {
    const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzI0OTY3NDE0LCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.8T4I_VD7mNIQtyOwg6fWg7uGSRMQcE7FHdKbwzH_oQA";

    const allModules = document.querySelectorAll('.module');

    allModules.forEach( module => {
        const moduleName = module.querySelector('.module-title');

        const jsonDataModule = {
            courseId: courseId,
            name: moduleName.value,
            description: ''
        }
        
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
            // cadastrar lição

            const allLessons = module.querySelectorAll('.lesson-group');
            console.log(allLessons);

            allLessons.forEach(lesson => {
                const lessonName = lesson.querySelector('.video-lesson-name');
                const lessonLink = lesson.querySelector('.video-lesson-link');
                const lessonDescription = lesson.querySelector('.video-lesson-description');

                const jsonDataLessons = {
                    name: lessonName.value,
                    description: lessonDescription.value,
                    video: lessonLink.value,
                    moduleId: module.id
                };

                fetch(`https://localhost:7092/api/videolessons`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokenJwt}`
                    },
                    body: JSON.stringify(jsonDataLessons)
                })
                .then(response => {
                    response.json().then((id) => {
                        showToast(id); //exemplo
                    });
                })
                .catch(error => console.log('Erro:', error));
            });
        })
        .catch(error => {
            console.error('Erro:', error.title); // "One or more validation errors occurred."
            console.error('Status:', error.status); // 400
            console.error('Trace ID:', error.traceId); 
        

            for (let field in error.errors) {
                if (error.errors.hasOwnProperty(field)) {
                    error.errors[field].forEach((errorMessage) => {
                        showToast(errorMessage);
                        showToastError(`${errorMessage}`);
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