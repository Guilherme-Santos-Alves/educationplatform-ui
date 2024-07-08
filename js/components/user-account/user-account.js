class userAccountSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="user-account-section">
                <div class="user-account-content">
                    <div class="user-account-header">
                        <div class="header-content">
                            <div class="header-description">
                                <h1>Olá, Guilherme Santos!</h1>
                                <h2>Gerencie tudo que importa em um só lugar.</h2>
                            </div>
                            
                            <i class="fa-solid fa-gears"></i>
                        </div>
                        
                    </div>
                    <div class="user-personal-data">
                        <h2 class="title">Informações pessoais</h2>
                        <div class="personal-data-inputs">
                                <div class="line">
                                    <label for="user-fullname">Nome Completo</label>
                                    <input id="user-fullname" type="text">
                                </div>
                                <div class="line">
                                    <label for="user-email">E-mail</label>                              
                                    <input id="user-email" type="text">
                                </div>
                                <div class="line">                 
                                    <label for="user-phone">Telefone</label>
                                    <input id="user-phone" type="text">
                                </div>
                        </div>
                        <div class="user-photo-edit">
                            <h2 for="">Editar Imagem de Perfil</h2>
                            <div class="photo-edit">
                                <div class="edit-background">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="user-config">
                        <h2 class="title">Configurações</h2>
                        <div class="inputs-select">
                            <div class="line">
                                <label for="language-option">Idioma</label>
                                <select name="" id="language-option">
                                    <option value="en">Inglês</option>
                                    <option value="es">Espanhol</option>
                                    <option value="zh">Chinês</option>
                                    <option value="hi">Hindi</option>
                                    <option value="ar">Árabe</option>
                                    <option value="pt" selected>Português</option>
                                    <option value="bn">Bengali</option>
                                    <option value="ru">Russo</option>
                                    <option value="ja">Japonês</option>
                                    <option value="de">Alemão</option>
                                    <option value="fr">Francês</option>
                                    <option value="it">Italiano</option>
                                    <option value="ko">Coreano</option>
                                    <option value="tr">Turco</option>
                                    <option value="vi">Vietnamita</option>
                                </select>
                            </div>
                            <div class="line">
                                <label for="time-zone-option">Fuso Horário</label>
                                <select name="" id="time-zone-option">
                                    <option value="UTC-12:00">UTC-12:00 - Horário da Ilha Baker</option>
                                    <option value="UTC-11:00">UTC-11:00 - Horário de Niue, Horário Padrão de Samoa</option>
                                    <option value="UTC-10:00">UTC-10:00 - Horário Padrão do Havaí-Aleutas, Horário das Ilhas Cook</option>
                                    <option value="UTC-09:30">UTC-09:30 - Horário das Ilhas Marquesas</option>
                                    <option value="UTC-09:00">UTC-09:00 - Horário Padrão do Alasca, Horário das Ilhas Gambier</option>
                                    <option value="UTC-08:00">UTC-08:00 - Horário Padrão do Pacífico</option>
                                    <option value="UTC-07:00">UTC-07:00 - Horário Padrão das Montanhas</option>
                                    <option value="UTC-06:00">UTC-06:00 - Horário Padrão Central</option>
                                    <option value="UTC-05:00">UTC-05:00 - Horário Padrão do Leste</option>
                                    <option value="UTC-04:00">UTC-04:00 - Horário Padrão do Atlântico</option>
                                    <option value="UTC-03:30">UTC-03:30 - Horário Padrão de Terra Nova</option>
                                    <option value="UTC-03:00" selected>UTC-03:00 - Argentina, Brasil, Guiana Francesa, Uruguai</option>
                                    <option value="UTC-02:00">UTC-02:00 - Horário das Ilhas Geórgia do Sul/Sandwich do Sul</option>
                                    <option value="UTC-01:00">UTC-01:00 - Horário Padrão dos Açores, Horário de Cabo Verde</option>
                                    <option value="UTC+00:00">UTC+00:00 - Horário de Greenwich, Horário da Europa Ocidental</option>
                                    <option value="UTC+01:00">UTC+01:00 - Horário da Europa Central, Horário da África Ocidental</option>
                                    <option value="UTC+02:00">UTC+02:00 - Horário da Europa Oriental, Horário da África Central</option>
                                    <option value="UTC+03:00">UTC+03:00 - Horário de Moscou, Horário da África Oriental</option>
                                    <option value="UTC+03:30">UTC+03:30 - Horário Padrão do Irã</option>
                                    <option value="UTC+04:00">UTC+04:00 - Horário Padrão do Golfo, Horário de Samara</option>
                                    <option value="UTC+04:30">UTC+04:30 - Horário do Afeganistão</option>
                                    <option value="UTC+05:00">UTC+05:00 - Horário Padrão do Paquistão, Horário de Ecaterimburgo</option>
                                    <option value="UTC+05:30">UTC+05:30 - Horário Padrão da Índia, Horário do Sri Lanka</option>
                                    <option value="UTC+05:45">UTC+05:45 - Horário do Nepal</option>
                                    <option value="UTC+06:00">UTC+06:00 - Horário Padrão de Bangladesh, Horário do Butão, Horário de Omsk</option>
                                    <option value="UTC+06:30">UTC+06:30 - Horário das Ilhas Cocos, Horário de Mianmar</option>
                                    <option value="UTC+07:00">UTC+07:00 - Horário da Indochina, Horário de Krasnoyarsk</option>
                                    <option value="UTC+08:00">UTC+08:00 - Horário Padrão da China, Horário Padrão da Austrália Ocidental, Horário de Irkutsk</option>
                                    <option value="UTC+08:45">UTC+08:45 - Horário Padrão do Sudeste da Austrália Ocidental</option>
                                    <option value="UTC+09:00">UTC+09:00 - Horário Padrão do Japão, Horário Padrão da Coreia, Horário de Chita</option>
                                    <option value="UTC+09:30">UTC+09:30 - Horário Padrão Central da Austrália</option>
                                    <option value="UTC+10:00">UTC+10:00 - Horário Padrão Oriental da Austrália, Horário de Vladivostok</option>
                                    <option value="UTC+10:30">UTC+10:30 - Horário Padrão da Ilha Lord Howe</option>
                                    <option value="UTC+11:00">UTC+11:00 - Horário das Ilhas Salomão, Horário de Magadan</option>
                                    <option value="UTC+12:00">UTC+12:00 - Horário de Fiji, Horário das Ilhas Gilbert, Horário de Kamchatka, Horário Padrão da Nova Zelândia</option>
                                    <option value="UTC+12:45">UTC+12:45 - Horário das Ilhas Chatham</option>
                                    <option value="UTC+13:00">UTC+13:00 - Horário das Ilhas Phoenix, Horário de Tonga</option>
                                    <option value="UTC+14:00">UTC+14:00 - Horário das Ilhas Line</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="user-security">
                        <h2 class="title">Alterar senha</h2>
                        <div class="user-security-inputs">
                            <div class="line">
                                    <label for="current-password">Senha atual</label>
                                    <div class="input-group">
                                        <input id="current-password" type="password">
                                        <button id="show-current-password">
                                            <i class="fa-solid fa-eye-slash"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="line">
                                    <label for="new-password">Nova senha</label>                              
                                    <div class="input-group">
                                        <input id="new-password" type="password">
                                        <button id="show-new-password">
                                            <i class="fa-solid fa-eye-slash"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="line">                 
                                    <label for="confirm-password">Confirmar senha</label>
                                    <div class="input-group">
                                        <input id="confirm-password" type="password">
                                        <button id="show-confirm-password">
                                            <i class="fa-solid fa-eye-slash"></i>
                                        </button>
                                    </div>

                                </div>
                        </div>
                    </div>
                    <div class="save-editions">
                        <button class="save-editions-btn">Salvar Alterações</button>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('user-account-section', userAccountSection);

document.addEventListener('DOMContentLoaded', () => {
    const currentPasswordInput = document.getElementById('current-password');
    const currentPasswordBtn = document.getElementById('show-current-password');
    const newPasswordInput = document.getElementById('new-password');
    const newPasswordBtn = document.getElementById('show-new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordBtn = document.getElementById('show-confirm-password');

    currentPasswordBtn.addEventListener('click', () => {
        if (currentPasswordInput.type === 'password'){
            currentPasswordInput.type = 'text';
            currentPasswordBtn.innerHTML = '<i class="fa-solid fa-eye"></i>'
        } else {
            currentPasswordInput.type = 'password'
            currentPasswordBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
        }
    });

    newPasswordBtn.addEventListener('click', () => {
        if (newPasswordInput.type === 'password'){
            newPasswordInput.type = 'text';
            newPasswordBtn.innerHTML = '<i class="fa-solid fa-eye"></i>'
        } else {
            newPasswordInput.type = 'password'
            newPasswordBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
        }
    });

    confirmPasswordBtn.addEventListener('click', () => {
        if (confirmPasswordInput.type === 'password'){
            confirmPasswordInput.type = 'text';
            confirmPasswordBtn.innerHTML = '<i class="fa-solid fa-eye"></i>'
        } else {
            confirmPasswordInput.type = 'password'
            confirmPasswordBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
        }
    });
})