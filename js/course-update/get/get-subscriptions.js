async function getSubscriptions() {
    try {
        const response = await fetch(`https://localhost:7092/api/subscriptions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const subscription = await response.json();
        return subscription.data;
    } catch (error) {
        console.error("Erro ao buscar assinaturas:", error);
        return null;
    }
}
