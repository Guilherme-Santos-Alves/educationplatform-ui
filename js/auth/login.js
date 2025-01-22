document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.querySelector('#form-login');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    formLogin.addEventListener('submit', (e)=> {
        e.preventDefault();

        const formData = {
            email: email.value,
            password: password.value
        };

        login(formData);
    });

    function login(formData) {
        fetch(`https://localhost:7092/api/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then( response => {
            if(response.ok){
                response.json().then(( data ) => {
                    const userData = {
                        role: data.data.role,
                        token: data.data.token,
                        userId: data.data.id
                    };
                    
                    localStorage.setItem('userSession', JSON.stringify(userData));
  
                    Swal.fire({
                        text: "Login realizado com sucesso!",
                        icon: "success"
                    });

                    setTimeout(() => {
                        window.location.href = 'main-home.html';
                    }, 500);
                });
            } else{
                response.text().then(( errorMsg ) => {
                    const passwordError = document.getElementById("login-error");
                    passwordError.classList.remove("hidden");
                    passwordError.classList.add("visible");
                
                    passwordError.textContent = errorMsg || "Login inválido.";
                });
            }
        });
    }
})