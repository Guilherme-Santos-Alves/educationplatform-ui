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
                modules.data.forEach(module => {
                    const inputModule = `
                        <div class="module">
                            <input class="md-name" type="text" required disabled value="${module.name}" data-module-id="${module.id}">
                            <div class="edit-btns">
                                <button type="button" class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button type="button" class="delete"><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>`;

                    const formModule = document.querySelector('#form-module-edit');
                    formModule.querySelector('.modules').insertAdjacentHTML('beforeend', inputModule);
                });
                editFields();
            });
        }
    });
};