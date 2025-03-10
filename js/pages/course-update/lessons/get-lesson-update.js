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
        console.log('mudou');
        const moduleId = moduleSelect.value;

        fetch(`https://localhost:7092/api/videolessons/module/${moduleId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
        })
        .then(response => {
            if (response.ok) {
                response.json().then(lessons => {
                    console.log(lessons);
                    lessons.data.forEach(lesson => {
                        const inputModule = `
                            <div class="lesson">
                                <input class="ls-name" type="text" disabled required value="${lesson.name}" data-lesson-id="${lesson.id}">
                                <div class="edit-btns">
                                    <button type="button" class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button type="button" class="delete"><i class="fa-regular fa-trash-can"></i></button>
                                </div>
                            </div>`;
    
                        const formLesson = document.querySelector('#form-lesson-edit');
                        formLesson.querySelector('.lessons').insertAdjacentHTML('beforeend', inputModule);
                    });
                });
            }
        });
    });
};