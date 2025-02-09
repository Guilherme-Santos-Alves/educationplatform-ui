function setupPutEvents(){
    const subscriptions = document.querySelectorAll('.subscription');

    subscriptions.forEach(subscription => {
        const editBtn = subscription.querySelector('.edit-btn');

        editBtn.addEventListener('click', () => {
            const nameInput = subscription.querySelector('.subscription-name-input');
            nameInput.disabled ? nameInput.removeAttribute('disabled') : nameInput.setAttribute('disabled', 'true');
        
            const subscriptionId = subscription.getAttribute('data-subscription-id');
            const deleteBtn = subscription.querySelector('.delete-btn');
            const sendFormBtn = subscription.querySelector('#send-form-btn');
        
            deleteBtn.style.display = deleteBtn.style.display === 'none' ? 'flex' : 'none';
            sendFormBtn.style.display = sendFormBtn.style.display === 'none' ? 'flex' : 'none';
            
            sendFormBtn.addEventListener('click', () => {
                putSubscription(subscriptionId, nameInput.value);
            });
        });
    });
}

function putSubscription(subscriptionId, name) {
    const jsonData = {
        id: subscriptionId,
        name: name
    }

    fetch(`https://localhost:7092/api/subscriptions/${subscriptionId}`, {
        method: 'PUT',
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
        }

        if (response.status === 204) {
            Swal.fire({
                icon: 'success',
                text: 'Assinatura atualizada com sucesso!',
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