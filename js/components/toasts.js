function showToast(msg) {
    const msgNova = JSON.stringify(msg);
    console.log(msgNova);

    const element = document.querySelector('.toast-msg');

    // Inserindo o HTML diretamente
    element.insertAdjacentHTML('beforeend', '<h2>Mensagem: ' + msgNova + '</h2>');
}
