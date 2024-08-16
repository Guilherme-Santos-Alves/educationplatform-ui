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
let moduloDesign = `<input type="text" class="teste" value="" id="course-cover" placeholder="neymar">`;

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
    console.log(document.querySelector('#adicionar-modulo'));

    document.querySelector('#adicionar-modulo').addEventListener('click', () => {
        const moduleTitleField = document.querySelector('.module-title-field');
        const group = document.querySelector('.modules-container');
        const moduleBodyTag = '<module-body></module-body>';
        
        group.insertAdjacentHTML('beforeend', moduleBodyTag);
        
        let lastModule = group.lastElementChild;
        lastModule.querySelector('.module-title').innerHTML = moduleTitleField.value;

        const addLessonBtn = lastModule.querySelector('.add-lesson-btn');
        addLessonBtn.addEventListener('click', () => {
            const lessonName = lastModule.querySelector('.lesson-name');
            const lessonsGroup = lastModule.querySelector('.lessons-content');
            const lessonBody = `<li class="lesson"></li>`;
        
            lessonsGroup.insertAdjacentHTML('beforeend', lessonBody);
        
            let lastLesson = lessonsGroup.lastElementChild;
            
            lastModule.lessonCount = (lastModule.lessonCount || 0) + 1;
            lastLesson.innerHTML = `Aula ${lastModule.lessonCount}: ${lessonName.value}`;

            const input = lastModule.querySelector('.lesson-name');
            const inputValue = input.value;
            const result = extractLinkAndTextLesson(inputValue);
            if (result) {
                console.log("Texto:", result.text);
                console.log("Link:", result.link);
            }
        });
    });
});

class ModuleBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<div class="module">
                <div class="module-content">
                    <h2 class="module-title"></h2>
                    <ul class="lessons-content">

                    </ul>
                    <div class="add-lesson">
                        <input class="lesson-name" type="text" placeholder="Digite o nome e o link adicionar uma aula">
                        <button class="add-lesson-btn">adicionar aula</button>
                    </div>
                </div>
            </div>`;
        this.lessonCount = 0;
    }
}

customElements.define('module-body', ModuleBody);

function extractLinkAndTextLesson(inputValue) {
    const regex = /(.*?)(https?:\/\/\S+)/;
    const match = inputValue.match(regex);
    if (match) {
        return {
            text: match[1].trim(),
            link: match[2]
        };
    }
    return null;
}


function extractLinkAndTextLesson(input) {
    const urlRegex = /https?:\/\/[^\s]+/;
    const match = input.match(urlRegex);

    if (match) {
        const link = match[0];
        const text = input.replace(link, '').trim();
        return { text, link };
    } else {
        console.error('Formato inválido ou URL não encontrada');
        return null;
    }
}

function enviar() {
    const allModules = document.querySelectorAll('.module');
    let titleOfModule;

    allModules.forEach(module => {
        const getTitleOfModule = module.querySelector('.module-title');
        titleOfModule = getTitleOfModule.textContent;
    });

    console.log(titleOfModule);
}

const modulos = [{
    modulo: 'nome',
    aulas: {
        aula1: {
            nome: 'sei lá',
            link: 'https://vimeo.com'
        },
        aula2: {
            nome: 'sei lá',
            link: 'https://vimeo.com'
        }
    } 
}];

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#course-title');
    input.addEventListener('change', () => {
        console.log(input.value);
    });
})

// window.addEventListener('beforeunload', function (event) {
//     console.log('A página está prestes a ser recarregada.');
//     event.preventDefault();
//     event.returnValue = '';
// });
