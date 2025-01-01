function extractVimeoId(url) {
    if (!url) {
        console.warn("URL inválida ou ausente.");
        return null;
    }
    const regex = /vimeo\.com\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const lessonUrl = getQueryParam('lessonUrl');
const lessonId = extractVimeoId(lessonUrl);

class EmbedVideo extends HTMLElement {
    connectedCallback() {
        if (!lessonId) {
            this.innerHTML = `
                <p style="color: red; font-weight: bold;">
                    Erro: Nenhum vídeo foi encontrado para exibir.
                </p>
            `;
            return;
        }

        this.innerHTML = `
            <iframe class="video" 
                src="https://player.vimeo.com/video/${lessonId}?badge=0&amp;autopause=0&amp;transparent=0&amp;player_id=0&amp;app_id=58479" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                title="Video Player">
            </iframe>
        `;
    }
}

customElements.define('embed-video', EmbedVideo);