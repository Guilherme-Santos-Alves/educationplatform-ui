function dropdownModule() {
    const modulos = document.querySelectorAll('.module');
    modulos.forEach((modulo) => {
        const openModule = modulo.querySelector('.module-header');
        if (openModule) {
            openModule.addEventListener('click', () => {
                modulo.classList.toggle('-hide');
            });
        }
    });
}