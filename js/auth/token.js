let tokenJwt;
let userRole;

if (localStorage.getItem('userSession')) {
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    tokenJwt = userSession.token;
    userRole = userSession.role;
}