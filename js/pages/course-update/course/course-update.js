window.onload = () => {
    protectRoute('Administrator');
}

function editFields () {
    let editButtons = document.querySelectorAll('.edit');

    document.querySelector('#form-lesson-edit').addEventListener('click', (event) => {
        if (event.target.closest('.edit')) {
            const button = event.target.closest('.edit');
            const parentWithLsName = button.closest('.lesson');
            if (parentWithLsName) {
                const inputLsName = parentWithLsName.querySelector('.ls-name');
                inputLsName.disabled = !inputLsName.disabled;
            }
        }
    });

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentWithCsName      = button.closest('.name');
            const parentWithCsDesc      = button.closest('.description');
            const parentWithCsCover     = button.closest('.cover');

            if (parentWithCsName) {
                const inputName = parentWithCsName.querySelector('#cs-name');
                inputName.disabled = !inputName.disabled;
            } else if (parentWithCsDesc) {
                const inputDesc = parentWithCsDesc.querySelector('#cs-desc');
                inputDesc.disabled = !inputDesc.disabled;
            } else if (parentWithCsCover) {
                const inputCover = parentWithCsCover.querySelector('#cs-cover');
                inputCover.disabled = !inputCover.disabled;
            }

            const parentWithMdName = button.closest('.module');
            if (parentWithMdName) {
                const inputMdName = parentWithMdName.querySelector('.md-name');
                inputMdName.disabled = !inputMdName.disabled;
                const inputMdDesc = parentWithMdName.querySelector('.md-desc');
                inputMdDesc.disabled = !inputMdDesc.disabled;
            }

            const parentWithLsName = button.closest('.lesson');
            if (parentWithLsName) {
                const inputLsName = parentWithLsName.querySelector('.ls-name');
                inputLsName.disabled = !inputLsName.disabled;
            }
        });
    });

    const allModules = document.querySelectorAll('.module');
    allModules.forEach( module => {

        const inputName = module.querySelector('.md-name');
        const inputDesc = module.querySelector('.md-desc');

        inputName.addEventListener('input', () => {
            module.setAttribute("data-md-changed", "true");
        });

        inputDesc.addEventListener('input', () => {
            module.setAttribute("data-md-changed", "true");
        });
    });
}


