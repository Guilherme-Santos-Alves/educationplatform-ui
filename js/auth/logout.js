document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.querySelector('#logout-btn');

    logoutBtn.addEventListener('click', () => {
        if (localStorage.getItem('userSession')){
            localStorage.removeItem('userSession');

            window.location.href = 'login.html'
        }
    });
});