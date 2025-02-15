function moduleAndLessonRegister(courseId) {
    const allModules = document.querySelectorAll('.module');

    allModules.forEach( module => {
        const moduleName = module.querySelector('.module-title');

        const jsonDataModule = {
            courseId: courseId,
            name: moduleName.value,
            description: 'teste'
        }
        
        fetch(`https://localhost:7092/api/modules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
            body: JSON.stringify(jsonDataModule)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw error;
                });
            }
            return response.json();
        })
        .then(moduleId => {
            if (!document.querySelector('.lesson-group')){
                clearFormData();
            }

            sendLessons(moduleId, module);
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
    });
}