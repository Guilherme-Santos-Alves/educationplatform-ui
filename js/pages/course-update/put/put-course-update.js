document.addEventListener('DOMContentLoaded', () => {
    const courseFields = {
        name: document.querySelector('#cs-name'),
        description: document.querySelector('#cs-desc'),
        cover: document.querySelector('#cs-cover'),
        subscription: document.querySelector('#cs-subscription')
    };

    const formCurso = document.querySelector('#form-course-edit');
    formCurso.addEventListener('submit', (e) => {
        e.preventDefault();
        const courseData = {
            //id: get params,
            id: 1,
            name: courseFields.name.value,
            description: courseFields.description.value,
            cover: courseFields.cover.value,
            //subscription: courseFields.subscription.value
        }

        Swal.fire({
            title: 'Confirmar atualização',
            text: 'Você tem certeza que deseja atualizar este curso?',
            icon: 'warning',
            iconColor: '#8543e2',
            showCancelButton: true,
            confirmButtonColor: '#8543e2',
            cancelButtonColor: '#2C2F31',
            confirmButtonText: 'Sim, atualizar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                putCourseUpdate(courseData);
            }
        });
    });
});

function putCourseUpdate(courseData) {
    fetch(`https://localhost:7092/api/courses/${courseData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(courseData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => {
                throw new Error(`Erro: ${error.message || 'Falha desconhecida'}`);
            });
        }

        if (response.status === 204) {
            Swal.fire({
                icon: 'success',
                text: 'Curso atualizado com sucesso!',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                location.reload();
            });

            return null;
        }

        return response.json();
    })
    .then(data => {
        if (data) {
            console.log("Resposta da API:", data);
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error.message || error);
    });
}