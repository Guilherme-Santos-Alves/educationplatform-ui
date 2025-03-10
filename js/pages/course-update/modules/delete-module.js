function setupDeleteEvents(){
    const modules = document.querySelectorAll('.module');

    modules.forEach(module => {
        const deleteBtn = module.querySelector('.delete-module-btn');

        deleteBtn.addEventListener('click', () => {
            Swal.fire({
                title: "Tem certeza?",
                text: "Essa ação é irreversível!",
                icon: "warning",
                showCancelButton: true,
                iconColor: "#161021",
                confirmButtonColor: "#9a67e1",
                cancelButtonColor: "#161021",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText: "Cancelar"
            })
            .then((result) => {
                if (result.isConfirmed) {
                    const moduleId = module.getAttribute('data-module-id');
                    deleteModule(moduleId);
                }
            });
        });
    });
}

function deleteModule(moduleId) {
    console.log('delete o modulo');
    fetch(`https://localhost:7092/api/modules/${moduleId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
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
                text: 'Módulo excluído com sucesso!',
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
        });
    });
}

function deleteNewModule() {
    const allNewModules = document.querySelectorAll('.new-module');

    allNewModules.forEach(module => {
        const deleteNewMdBtn = module.querySelector('.delete-new-md-btn');
        deleteNewMdBtn.addEventListener('click', () => {
            const parentModule = deleteNewMdBtn.closest('.new-module');
            parentModule.remove();
        });
    })
}