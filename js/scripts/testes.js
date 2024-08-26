// document.addEventListener('DOMContentLoaded', () => {
//     const modulos = document.querySelectorAll('.module');

//     modulos.forEach((modulo) => {
//         const openModule = modulo.querySelector('.module-header');
//         if (openModule) {
//             openModule.addEventListener('click', () => {
//                 modulo.classList.toggle('-hide');
//             });
//         }
//     });
// });
// let moduloDesign = `<input type="text" class="teste" value="" id="course-cover" placeholder="neymar">`;

// document.addEventListener('DOMContentLoaded', () => {
//     const modulos = document.querySelectorAll('.modulo');
//     console.log(modulos);

//     const modulosNoInput = JSON.stringify(modulos);
//     console.log(modulosNoInput);

//     modulos.forEach(modulo => {
//         console.log('1 modulo');
//         modulo.innerHTML = moduloDesign;
//         modulo.querySelector('.teste').placeholder = document.querySelector('#course-title').value;
//     });
// });

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
                        <h1 class="lesson-number">Aula</h1>
                        <div class="headers">
                            <label for="">Nome da aula:</label>
                            <label for="">Link da aula:</label>
                            <label for="">Descrição da aula:</label>
                        </div>
                        <div class="fields">
                            <input class="video-lesson-name" type="text" placeholder="nome da aula">
                            <input class="video-lesson-link" type="text" placeholder="link da aula">
                            <input class="video-lesson-description" type="text" placeholder="descrição da aula">
                        </div>
                    </div>`;
            
                lessonsGroup.insertAdjacentHTML('beforeend', lessonBody);
            });
        } else {
            alert('Para adicionar um módulo o campo de título não pode estar vazio!')
        }
        
        
    });
});

class ModuleBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<div class="module">
                <div class="module-content">
                    <div class="module-header">
                        <h2 clas="">Modulo: </h2>
                        <input type="text" class="module-title">
                        <button class="module-delete-btn">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <ul class="lessons-content">

                    </ul>
                    <div class="add-lesson">
                        <button class="add-lesson-btn">adicionar aula</button>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('module-body', ModuleBody);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.send-form-btn').addEventListener('click', () => {
        courseRegisterMonitorado();
    });
});

function courseRegister() {
    const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xlaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzI0NzIyMDk1LCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.zhvA6yz-hwkHWoEtIONQjfIM1aZZl3CaJLLSY_H1stg";
    
    const nameOfCourse = document.getElementById('course-title');
    const descriptionOfCourse = document.getElementById('course-description');
    const coverOfCourse = "www.youtube.com"; //document.getElementById('course-cover')

    const jsonDataCourse = {
        subscriptionId: 1,
        name: nameOfCourse.value,
        description: descriptionOfCourse.value,
        cover: coverOfCourse 
    };

    console.log(jsonDataCourse);

    fetch(`https://localhost:7092/api/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(jsonDataCourse)
    })
    .then( response => {
        response.json().then((id) => {
            const courseId = id;
            console.log(courseId);
            moduleRegister(courseId);
        });
    })
    .catch(error => console.log('Erro:', error));
}

// Função que monitora a execução de outra função
function monitorarExecucao(func) {
    return function(...args) {
        console.log('Iniciando a execução da função.');
        const resultado = func(...args);
        console.log('Função executada.');
        return resultado;
    }
}

// Função `courseRegister` monitorada
const courseRegisterMonitorado = monitorarExecucao(courseRegister);

// window.addEventListener('beforeunload', function (event) {
//     console.log('A página está prestes a ser recarregada.');
//     event.preventDefault();
//     event.returnValue = '';
// });

// criar uma variavek com array de aulas

// criar um botão de excluir aula fazendo ele subir na cascata e encontar o pai


function deleteModule() {
    const moduleDeleteBtn = document.querySelectorAll('.module-delete-btn');

    moduleDeleteBtn.forEach( deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const parentModule = deleteBtn.closest('.module');

            parentModule.remove();
        });
    });
}

function moduleRegister(courseId) {
    const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzI0NzIyMDk1LCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.zhvA6yz-hwkHWoEtIONQjfIM1aZZl3CaJLLSY_H1stg";

    const allModules = document.querySelectorAll('.module');

    allModules.forEach( module => {
        const moduleName = module.querySelector('.module-title');

        const jsonDataModule = {
            courseId: courseId,
            name: moduleName.value,
            description: 'toma aqui sua desc'
        }
        
        fetch(`https://localhost:7092/api/modules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
            body: JSON.stringify(jsonDataModule)
        })
        .then( response => {
            response.json().then(( moduleId ) => {
                module.id = 'module-' + moduleId;
                lessonRegister();
            });
        })
        .catch( error => console.log('Erro:', error));
    })
}

function lessonRegister() {
    const tokenJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzI0NzIyMDk1LCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.zhvA6yz-hwkHWoEtIONQjfIM1aZZl3CaJLLSY_H1stg";

    const allLessons = document.querySelectorAll('.lesson-group');

    allLessons.forEach(lesson => {
        const lessonName = lesson.querySelector('.video-lesson-name');
        const lessonLink = lesson.querySelector('.video-lesson-link');
        const lessonDescription = lesson.querySelector('.video-lesson-description');

        const parentModule = lesson.closest('.module');
        const moduleId = parentModule.id;
        const extractModuleIdNumber = parseInt(moduleId.split('-')[1] || null);

        const jsonDataLessons = {
            name: lessonName.value,
            description: lessonDescription.value,
            video: lessonLink.value,
            moduleId: extractModuleIdNumber
        };

        console.log(jsonDataLessons);

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
                console.log(id);
                showToast(id);
            });
        })
        .catch(error => console.log('Erro:', error));
    });
}