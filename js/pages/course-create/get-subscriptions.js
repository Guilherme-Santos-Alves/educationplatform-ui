function getSubscriptions() {
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
    .then(subscriptionsData => {
        let subscriptionSelect = document.querySelector('#course-subscription');

        let isActive = 0;
        subscriptionsData.forEach(subscription => {
            if (subscription.active){
                const option = `<option value="${subscription.id}">${subscription.name}</option>`;
                subscriptionSelect.insertAdjacentHTML('beforeend', option);
                isActive++;
            }
        });

        if (isActive === 0){
            const optionDisabled = `<option value="" disabled selected>Nenhuma assinatura cadastrada</option>`;
            subscriptionSelect.insertAdjacentHTML('beforeend', optionDisabled);
        }
    })
    .catch(error => {
        console.error(`${error}`);
    });
}