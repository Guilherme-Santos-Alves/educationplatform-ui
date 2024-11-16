function editFields () {

    let editButtons = document.querySelectorAll('.edit');

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentWithCsName      = button.closest('.name');
            const parentWithCsDesc      = button.closest('.description');
            const parentWithCsCover     = button.closest('.cover');
            const parentWithCsSignature = button.closest('.signature');
            if (parentWithCsName) {
                const inputName = parentWithCsName.querySelector('#cs-name');
                inputName.disabled = !inputName.disabled;
            } else if (parentWithCsDesc) {
                const inputDesc = parentWithCsDesc.querySelector('#cs-desc');
                inputDesc.disabled = !inputDesc.disabled;
            } else if (parentWithCsCover) {
                const inputCover = parentWithCsCover.querySelector('#cs-cover');
                inputCover.disabled = !inputCover.disabled;
            } else if (parentWithCsSignature) {
                const inputSignature = parentWithCsSignature.querySelector('#cs-signature');
                inputSignature.disabled = !inputSignature.disabled;
            }

            const parentWithMdName = button.closest('.module');
            if (parentWithMdName) {
                const inputMdName = parentWithMdName.querySelector('.md-name');
                inputMdName.disabled = !inputMdName.disabled;
            }

            const parentWithLsName = button.closest('.lesson');
            if (parentWithLsName) {
                const inputLsName = parentWithLsName.querySelector('.ls-name');
                inputLsName.disabled = !inputLsName.disabled;
            }
        });
    });

    const allModules = document.querySelectorAll('.md-name');
    allModules.forEach( module => {
        module.addEventListener('change', () => {
            const moduleData = {
                id: module.dataset.moduleId,
                name: module.value
            };

            console.log(moduleData);

            let changedModules = [];

            if (sessionStorage.hasOwnProperty('changedModules')){
                changedModules = JSON.parse(sessionStorage.getItem('changedModules'));

                console.log(changedModules);
            }

            const existingModuleIndex = changedModules.findIndex(item => item.id === moduleData.id);
            if (existingModuleIndex !== -1) {
                changedModules[existingModuleIndex].name = moduleData.name;
            } else {
                changedModules.push(moduleData);
            }

            sessionStorage.setItem('changedModules', JSON.stringify(changedModules));
            console.log(JSON.parse(sessionStorage.getItem('changedModules')));
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const formCurso = document.querySelector('#form-module-edit');

    formCurso.addEventListener('submit', (e) => {
        e.preventDefault();
        const changedModules = JSON.parse(sessionStorage.getItem('changedModules'));
        putModuleUpdate(changedModules);
    });
});