window.onload = () => {
    const newSubscriptionBtn = document.querySelector('#add-new-subscription-btn');
    const newSubscriptionForm = document.querySelector('#new-subscription-form');
    
    newSubscriptionBtn.addEventListener('click', () => {
        const newSubscriptionBody = `
            <label for="new-subscription-name">Nome da assinatura:</label>
            <input type="text" id="new-subscription-name" required>
            <label for="new-subscription-days">Duração em dias da assinatura:</label>
            <input type="number" id="new-subscription-duration" required> 
            <button type="submit">Salvar</button>
        `;

        newSubscriptionForm.innerHTML = newSubscriptionBody;
    });

    newSubscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newSubscriptionName = document.querySelector('#new-subscription-name');
        const newSubscriptionDuration = document.querySelector('#new-subscription-duration');
        postNewSubscription(newSubscriptionName, newSubscriptionDuration);
    });
}

function postNewSubscription(name, duration) {
    const jsonData = {
        name: name.value,
        durationInDays: duration.value 
    }

    fetch(`https://localhost:7092/api/subscriptions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorText => {
                throw new Error(errorText);
            });
        } else{
            Swal.fire({
                text: `Assinatura cadastrada com sucesso!`,
                icon: "success",
                timer: 1000,
                showConfirmButton: false
            });

            setTimeout(() => {
                location.reload();
            }, 500);
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            text: `Não foi possível cadastrar a assinatura.`,
            showConfirmButton: false,
        });
    });
}