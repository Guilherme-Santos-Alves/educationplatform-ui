document.addEventListener('DOMContentLoaded', () => {
    getSubscriptions();
});

function getSubscriptions() {
    const manageSubscriptionContent = document.querySelector('.manage-subscription-content');

    fetch(`https://localhost:7092/api/subscriptions`, {
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
    .then(subscriptions => {
        let hasActiveSubscription = false;

        subscriptions.data.forEach(subscription => {
            if (subscription.active){
                hasActiveSubscription = true;

                const subscriptionBody = `
                    <div class="subscription" data-subscription-id="${subscription.id}">
                        <div class="subscription-name">
                            <form id="edit-subscription-form">
                                <input type="text" value="${subscription.name}" class="subscription-name-input" required disabled>
                            </form>
                        </div>
                        <div class="subscription-btns">
                            <button data-tooltip="editar" class="edit-btn" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </button>
                            <button data-tooltip="excluir" class="delete-btn" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                    </svg>
                            </button>
                            <button data-tooltip="salvar" id="send-form-btn" type="submit" style="display: none;">
                                <span class="material-symbols-outlined">
                                    task_alt
                                </span>
                            </button>
                        </div>
                    </div>`;

                manageSubscriptionContent.insertAdjacentHTML('beforeend', subscriptionBody);
            } 
        });

        if (!hasActiveSubscription){
            const errorMsg = `<p class="error-message" style="color: white;">Nenhuma assinatura encontrada.</p>`;
            manageSubscriptionContent.insertAdjacentHTML("beforeend", errorMsg);
        }

        setupDeleteEvents();
        setupPutEvents();
    })
    .catch(error => {
        const errorMsg = `<p class="error-message" style="color: white;">${error.message}</p>`;
        manageSubscriptionContent.insertAdjacentHTML("beforeend", errorMsg);
    });
}