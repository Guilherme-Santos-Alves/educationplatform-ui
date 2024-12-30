function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const courseId = getQueryParam('courseId');

document.addEventListener('DOMContentLoaded', getModules);

function getModules() {
    fetch(`https://localhost:7092/api/modules/course/${courseId}`, {
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
    .then(modulesResponse => {
        console.log(modulesResponse);
        
        const modules = modulesResponse.data;

        if (Array.isArray(modules) && modules.length > 0) {
            modules.forEach(module => {
                const template = `
                    <div class="module">
                        <div class="module-header">
                            <h2 class="title">${module.name}</h2>
                            <button class="show-lessons-btn">
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                `;
                document.querySelector(".course-modules").insertAdjacentHTML("beforeend", template); 
            });
        } else {
            document.querySelector(".course-modules").innerHTML = `<p class="error-message">Nenhum módulo encontrado.</p>`;
        }
    })
    .catch(error => {
        const errorContainer = document.querySelector(".course-modules");
        errorContainer.innerHTML = `<p class="error-message">${'Erro ao carregar os módulos: ' + error.message}</p>`;
    });
}