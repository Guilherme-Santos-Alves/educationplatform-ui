document.addEventListener('DOMContentLoaded', () => {
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    
    const userDataFields = {
        userNameTitle: document.querySelector('#user-name-title'),
        userName  : document.querySelector('#user-fullname'),
        userEmail : document.querySelector('#user-email'),
        userPhone : document.querySelector('#user-phone')
    }

    getUserData(userSession.userId, userDataFields);
});

function getUserData(userId, userDataFields) {
    fetch(`https://localhost:7092/api/users/${userId}`, {
        method: 'GET',
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
        return response.json();
    })
    .then(user => {
        const userFirstName = user.data.fullName.split(' ')[0];
        userDataFields.userNameTitle.innerHTML = `Olá, ${userFirstName}`;
        userDataFields.userName.value = user.data.fullName;
        userDataFields.userEmail.value = user.data.email;
        userDataFields.userPhone.value = user.data.phone;
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            text: `${error.message}`,
            showConfirmButton: true,
        });
    });
}