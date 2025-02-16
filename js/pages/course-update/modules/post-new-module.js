document.addEventListener('DOMContentLoaded', () => {
    const btnNewModule = document.querySelector('#add-module-btn');
    btnNewModule.addEventListener('click', () => {
        const moduleContainer = document.querySelector('.modules');
        const newModule = '<new-module></new-module>';
        moduleContainer.insertAdjacentHTML('beforeend', newModule);
    });
});