document.addEventListener('DOMContentLoaded', () => {
    const formModule = document.querySelector('#form-module-edit');
    formModule.addEventListener('submit', async (e) => {
        e.preventDefault();

        const allModules = document.querySelectorAll('.module');
        const changedModules = [];

        allModules.forEach(module => {
            if (module.getAttribute('data-md-changed')) {
                const inputName = module.querySelector('.md-name');
                const inputDesc = module.querySelector('.md-desc');

                changedModules.push({
                    id: Number(module.dataset.moduleId),
                    name: inputName.value,
                    description: inputDesc.value
                });
            }
        });

        if (changedModules.length > 0) {
            updateModulesIndividually(changedModules);
        } else {
            console.log("Nenhum módulo foi alterado.");
        }
    });
});

function moduleFields() {
    const allModules = document.querySelectorAll('.md-name');
    console.log(allModules);
    allModules.forEach(module => {
        module.addEventListener('input', () => { 
            module.setAttribute('data-md-changed', 'true'); 
        });
    });
}

function updateModulesIndividually(changedModules){
    changedModules.forEach(module => {
        fetch(`https://localhost:7092/api/modules/${module.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
            body: JSON.stringify(module)
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(errorText => {
                    throw new Error(errorText);
                });
            }
    
            if (response.status === 204) {
                Swal.fire({
                    icon: 'success',
                    text: 'Informações atualizadas com sucesso!',
                    showConfirmButton: false,
                    timer: 2000
                }).then(() => {
                    location.reload();
                });
    
                return null;
            }
    
            return response.json();
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                text: `${error.message}`,
                showConfirmButton: true,
                timer: 2000
            });
        });
    })
}