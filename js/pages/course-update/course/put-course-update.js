document.addEventListener('DOMContentLoaded', () => {
    const courseFields = {
        name: document.querySelector('#cs-name'),
        description: document.querySelector('#cs-desc'),
        cover: document.querySelector('#cs-cover'),
    };

    const formCurso = document.querySelector('#form-course-edit');
    formCurso.addEventListener('submit', (e) => {
        e.preventDefault();

        const courseData = {
            id: courseId,
            name: courseFields.name.value,
            description: courseFields.description.value,
            cover: courseFields.cover.value,
        }

        putCourseUpdate(courseData);
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
            return response.json().then(errorJson => {
                throw errorJson;
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
    .catch(error => {
        const formattedErrors = Object.values(error.errors)
        .map(messages => messages.join(", "))
        .join("\n");
    
        Swal.fire({
            icon: 'error',
            text: `${formattedErrors}`,
            showConfirmButton: true,
        });
    });
}