document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.querySelector('#logout-btn');

    logoutBtn.addEventListener('click', () => {
        if (localStorage.getItem('tokenJwt')){
            localStorage.removeItem('tokenJwt');

            window.location.href = 'login.html'
        }
    });
});