document.addEventListener('DOMContentLoaded', () => {
    const btnNewModule = document.querySelector('#add-module-btn');
    btnNewModule.addEventListener('click', () => {
        const moduleContainer = document.querySelector('.modules');
        const newModule = '<new-module></new-module>';
        moduleContainer.insertAdjacentHTML('beforeend', newModule);

        deleteNewModule();
    });

    const formModuleEdit = document.querySelector('#form-module-edit');
    formModuleEdit.addEventListener('submit', (e) => {
        e.preventDefault();

        const newModules = document.querySelectorAll('.new-module');

        if (newModules.length !== 0){
            haveNewModules(newModules);
        }
    });
});

function postNewModule(jsonDataModule) {
    console.log(jsonDataModule);

    fetch(`https://localhost:7092/api/modules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(jsonDataModule)
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                text: 'Módulo cadastrado com sucesso!',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
               location.reload();
            });
        }

        if (!response.ok) {
            return response.json().then(error => {
                throw error;
            });
        }
        return response.json();
    })
    .catch(error => {
        for (let field in error.errors) {
            if (error.errors.hasOwnProperty(field)) {
                error.errors[field].forEach(errorMessage => {
                    Swal.fire({
                        text: `Não foi possível cadastrar um ou mais módulos: ${errorMessage}`,
                        icon: "error"
                    });
                });
            }
        }
    });
}

function haveNewModules(newModules) {
    console.log('chegou', newModules);

    newModules.forEach(module => {
        const mdName = module.querySelector('.new-md-name');
        const mdDesc = module.querySelector('.new-md-desc');

        const jsonData = {
            courseId: courseId,
            name: mdName.value,
            description: mdDesc.value
        }

        postNewModule(jsonData); 
    });

}