let tokenJwt;

if (localStorage.getItem('userSession')) {
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    tokenJwt = userSession.token;
}