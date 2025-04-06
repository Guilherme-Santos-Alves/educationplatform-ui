document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#course-register-form').addEventListener('submit', () => {
        courseRegister();
    });
});

function courseRegister() {
    const nameOfCourse = document.getElementById('course-title');
    const descriptionOfCourse = document.getElementById('course-description');
    const coverOfCourse = document.getElementById('course-cover');
    const subscriptionOfCourse = document.querySelector('#course-subscription');

    const jsonDataCourse = {
        subscriptionId: subscriptionOfCourse.value,
        name: nameOfCourse.value,
        description: descriptionOfCourse.value,
        cover: coverOfCourse.value
    }

    fetch(`https://localhost:7092/api/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(jsonDataCourse)
    })
    .then( response => {
        if (response.ok) {
            response.json().then(( id ) => {
                

                const courseId = id.id;
                console.log(id);

                moduleAndLessonRegister(courseId);
                Swal.fire({
                    text: `Curso cadastrado com sucesso! Você pode editar os cursos que criou na seção "Meus cursos".`,
                    icon: "success"
                });
                if (!document.querySelector('.module-body')){
                    clearFormData();
                }
            });
        } else {
            return response.json().then(error => {
                throw error;
            });
        }
    })
    .catch( error => {
        for (let field in error.errors) {
            if (error.errors.hasOwnProperty(field)) {
                error.errors[field].forEach((errorMessage) => {
                    showToast('Não foi possível cadastrar o curso: ' + errorMessage, 'error');
                });
            }
        }
    });
}