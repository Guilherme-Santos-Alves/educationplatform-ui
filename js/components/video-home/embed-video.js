function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const vimeoId = getQueryParam('vimeoId');
const lessonId = getQueryParam('lessonId');

class EmbedVideo extends HTMLElement {
    connectedCallback() {
        if (!vimeoId) {
            this.innerHTML = `
                <p style="color: red; font-weight: bold;">
                    Erro: Nenhum vídeo foi encontrado para exibir.
                </p>
            `;
            return;
        }

        this.innerHTML = `
            <iframe class="video" data-lesson-id="${lessonId}"
                src="https://player.vimeo.com/video/${vimeoId}?badge=0&amp;autopause=0&amp;transparent=0&amp;player_id=0&amp;app_id=58479" 
                    frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                title="Video Player">
            </iframe>
        `;
    }
}

customElements.define('embed-video', EmbedVideo);