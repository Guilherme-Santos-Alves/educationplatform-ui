window.onload = protectRoute;

function isAuthenticated() {
    return !!localStorage.getItem('userSession');
}

function protectRoute() {
    if (!isAuthenticated()) {
        Swal.fire({
            icon: "info",
            text: "Você precisa estar logado para acessar esta página.",
            showConfirmButton: false,
            timer: 2000
        });
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
}