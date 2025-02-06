function setupDeleteEvents(){
    const subscriptions = document.querySelectorAll('.subscription');

    subscriptions.forEach(subscription => {
        const deleteBtn = subscription.querySelector('.delete-btn');

        deleteBtn.addEventListener('click', () => {
            Swal.fire({
                title: "Tem certeza?",
                text: "Essa ação é irreversível!",
                icon: "warning",
                showCancelButton: true,
                iconColor: "#161021",
                confirmButtonColor: "#9a67e1",
                cancelButtonColor: "#161021",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText: "Cancelar"
            })
            .then((result) => {
                if (result.isConfirmed) {
                    const subscriptionId = subscription.getAttribute('data-subscription-id');
                    deleteSubscription(subscriptionId);
                }
            });
        });
    });
}

function deleteSubscription(subscriptionId) {
    fetch(`https://localhost:7092/api/subscriptions/${subscriptionId}`, {
        method: 'DELETE',
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

        if (response.status === 204) {
            Swal.fire({
                icon: 'success',
                text: 'Assinatura excluida com sucesso!',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                location.reload();
            });

            return null;
        }

        return response.json();
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            text: `${error.message}`,
            showConfirmButton: true,
        });
    });
}