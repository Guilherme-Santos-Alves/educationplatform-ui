document.addEventListener('DOMContentLoaded', () => {
    const userEmail = document.querySelector('#user-email');
    const userphone = document.querySelector('#user-phone');

    const personalDataForm = document.querySelector('#personal-data-form');
    const userSession = JSON.parse(localStorage.getItem('userSession'));

    personalDataForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const changedData = {
            id: userSession.userId,
            email: userEmail.value,
            phone: userphone.value
        }

        putUserData(changedData);
    })
});

function putUserData(changedData) {
    fetch(`https://localhost:7092/api/users/${changedData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(changedData)
        
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