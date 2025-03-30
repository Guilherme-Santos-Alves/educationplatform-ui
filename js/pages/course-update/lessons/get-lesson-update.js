function getLessonUpdate(modules) {
    const moduleSelect = document.querySelector('#module-select');

    modules.forEach( module => {
        if (module.active){
            const newOption = document.createElement('option');
            newOption.value = module.id;
            newOption.textContent = module.name;
            moduleSelect.appendChild(newOption);
        }
    });

    moduleSelect.addEventListener('change', () => {
        const moduleId = moduleSelect.value;

        fetch(`https://localhost:7092/api/videolessons/module/${moduleId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(errorText => {
                    const error = new Error(errorText);
                    error.status = response.status;
                    throw error;
                });
            }
            return response.json();
        })        
        .then(lessons => {
            const formLesson = document.querySelector('#form-lesson-edit');
            formLesson.querySelector('.lessons').innerHTML = '';
            lessons.data.forEach(lesson => {
                if (lesson.active){
                    formLesson.querySelector('.lessons').innerHTML = '';
                    const inputModule = `
                    <div class="lesson" data-lesson-id="${lesson.id}">
                        <div class="ls-inputs">
                            <label for="">Nome:</label>
                            <input class="ls-name" type="text" disabled required value="${lesson.name}" data-lesson-id="${lesson.id}">
                            <label for="">Descrição:</label>
                            <input class="ls-desc" type="text" disabled required value="${lesson.description}" data-lesson-id="${lesson.id}">
                        </div>
                        <div class="edit-btns">
                            <button type="button" class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" class="delete"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                    `;
                    formLesson.querySelector('.lessons').insertAdjacentHTML('beforeend', inputModule);
                
                } else {
                    formLesson.querySelector('.lessons').innerHTML = '';
                    const errorMsg = `
                        <p>Nenhuma aula encontrada para o módulo especificado.</p>
                    `;
                    formLesson.querySelector('.lessons').insertAdjacentHTML('beforeend', errorMsg);
                }
                
                const newLessonBtnContainer = document.querySelector('.btn-new-ls-content');
                newLessonBtnContainer.innerHTML = '';
                const newLessonBtn = `
                    <button type="button" id="add-lesson-btn">
                        <i class="fa fa-plus"></i>
                    </button>
                `;
                newLessonBtnContainer.insertAdjacentHTML('beforeend', newLessonBtn);
            });
            setupNewLessonEvents();
            setupDeleteLessonEvents();
            lessonFields();
            editFields();
        })
        .catch(error => {
            if (error.status === 404){
                const formLesson = document.querySelector('#form-lesson-edit');
                formLesson.querySelector('.lessons').innerHTML = '';

                const newLessonBtnContainer = document.querySelector('.btn-new-ls-content');
                newLessonBtnContainer.innerHTML = '';
                const newLessonBtn = `
                    <button type="button" id="add-lesson-btn">
                        <i class="fa fa-plus"></i>
                    </button>
                `;
                newLessonBtnContainer.insertAdjacentHTML('beforeend', newLessonBtn);

                formLesson.querySelector('.lessons').innerHTML = '';
                const errorMsg = `
                        <p>Nenhuma aula encontrada para o módulo especificado.</p>
                    `;
                formLesson.querySelector('.lessons').insertAdjacentHTML('beforeend', errorMsg);

                setupNewLessonEvents();
            } 
            
            if (error.status !== 404){
                Swal.fire({
                    icon: 'error',
                    text: `${error.message}`,
                    showConfirmButton: true,
                    timer: 2000
                });
            }
        });
    });
};