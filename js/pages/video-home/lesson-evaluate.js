function showEvaluationModal() {
    let selectedRating = 0;

    Swal.fire({
        title: 'O que você achou da aula?',
        html: `
        <div class="swal2-starrating">
            <button class="swal2-star-btn" data-value="1">★</button>
            <button class="swal2-star-btn" data-value="2">★</button>
            <button class="swal2-star-btn" data-value="3">★</button>
            <button class="swal2-star-btn" data-value="4">★</button>
            <button class="swal2-star-btn" data-value="5">★</button>
        </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        background: "#2C2F31",
        color: "#ffff",
        preConfirm: () => {
            if (selectedRating === 0) {
                Swal.showValidationMessage('Por favor, selecione uma nota.');
            }
            return selectedRating;
        },
        didOpen: () => {
            const stars = document.querySelectorAll('.swal2-star-btn');
            stars.forEach(star => {
                star.addEventListener('click', (event) => {
                    selectedRating = parseInt(event.target.getAttribute('data-value'));
                    stars.forEach(s => s.classList.remove('selected'));
                    for (let i = 0; i < selectedRating; i++) {
                        stars[i].classList.add('selected');
                    }
                });
            });
        }
    }).then(result => {
        if (result.isConfirmed) {
            Swal.fire({
                text: "Obrigado pela avaliação!",
                icon: "success",
                showConfirmButton: false,
                timer: 800,
                background: "#2C2F31",
                color: "#ffff"
            });
            postLessonFinished(selectedRating);
        } else {
            postLessonFinished(selectedRating);
        }
    });
}