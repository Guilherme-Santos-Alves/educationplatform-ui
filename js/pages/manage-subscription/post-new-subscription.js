document.addEventListener('DOMContentLoaded', () => {
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

        const durationValue = Number(newSubscriptionDuration.value); 

        if (isValidInt32(durationValue)){
            postNewSubscription(newSubscriptionName, newSubscriptionDuration); 
        } else{
            Swal.fire({
                icon: 'error',
                text: `O tempo de duração da assinatura é inválido!`,
                showConfirmButton: false,
            });
        }
        
    });
});

function isValidInt32(number) {
    return Number.isInteger(number) && number >= -2147483648 && number <= 2147483647;
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

            return response.json().then(errorJson => {
                throw errorJson;
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
        const formattedErrors = Object.values(error.errors)
        .map(messages => messages.join(", "))
        .join("\n");

        Swal.fire({
            icon: 'error',
            text: `${formattedErrors}`,
            showConfirmButton: false,
        });
    });
}