function isAuthenticated() {
    const userData = localStorage.getItem('userSession');
    if (!userData){
        return null;
    }

    try {
        const user = JSON.parse(userData);
        return user.role;
    } catch (error) {
        console.error('Erro ao parsear userSession:', error);
        return null;
    }
}


function protectRoute(expectedRole) {
    const userRole = isAuthenticated();

    if (!userRole) {
        Swal.fire({
            icon: "info",
            text: "Você precisa estar logado para acessar esta página.",
            showConfirmButton: false,
            timer: 2000
        });

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
        return;
    }

    if (userRole !== expectedRole && expectedRole !== 'both') {
        Swal.fire({
            icon: "info",
            text: "Você não tem permissão para acessar esta página.",
            showConfirmButton: false,
            timer: 2000
        });

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
}