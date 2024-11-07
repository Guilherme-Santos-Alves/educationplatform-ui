document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit');

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
});

document.addEventListener('DOMContentLoaded', () => {
    const formCurso = document.querySelector('#form-course-edit');
    console.log(formCurso);
    const inputName = formCurso.querySelector('#cs-name');
    const inputDesc = formCurso.querySelector('#cs-desc');

    formCurso.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!inputName.disabled){
            Atualizar(inputName.value);
        }

        if (!inputDesc.disabled){
            Atualizar(inputDesc.value);
        }
        
    });

    function Atualizar(input) {

        console.log(input);

        
    };
});
