function setupDeleteCourseEvents(){
    const course = document.querySelector('#form-course-edit');
    const deleteBtn = document.querySelector('#delete-course-btn');

    deleteBtn.addEventListener('click', () => {
        Swal.fire({
            title: "Excluir curso?",
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
                const courseId = course.getAttribute('data-course-id');
                deleteCourse(courseId);
            }
        });
    });

}

function deleteCourse(courseId) {
    fetch(`https://localhost:7092/api/courses/${courseId}`, {
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
                text: 'Curso excluído com sucesso!',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                window.location.href = "main-home.html";
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