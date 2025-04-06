function getModuleUpdate(courseId) {
    fetch(`https://localhost:7092/api/modules/course/${courseId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
    })
    .then(response => {
        if (response.ok) {
            response.json().then(modules => {
                console.log(modules);
                modules.forEach(module => {
                    if (module.active){
                        const inputModule = `
                        <div class="module" data-module-id="${module.id}">
                            <div class="md-inputs">
                                <label for="">Nome:</label>
                                <input class="md-name" type="text" required disabled value="${module.name}">
                                <label for="">Descrição:</label>
                                <input class="md-desc" type="text" required disabled value="${module.description}">
                            </div>

                            <div class="edit-btns">
                                <button type="button" class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button type="button" class="delete-module-btn"><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>`;

                        const formModule = document.querySelector('#form-module-edit');
                        formModule.querySelector('.modules').insertAdjacentHTML('beforeend', inputModule);
                    }                  
                });
                editFields();
                getLessonUpdate(modules);
                moduleFields();
                setupDeleteEvents();
            });
        }
    });
};

