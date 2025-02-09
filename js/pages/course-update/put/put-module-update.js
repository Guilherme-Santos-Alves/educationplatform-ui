function putModuleUpdate(changedModules) {
    console.log(changedModules);
    changedModules.forEach( module => {

        const moduleData = {
            id: module.id,
            name: module.name,
            description: 'testando' //module.description
        };

        fetch(`https://localhost:7092/api/modules/${moduleData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
            body: JSON.stringify(moduleData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw new Error(`Erro: ${error.message || 'Falha desconhecida'}`);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Resposta da API:", data);
        })
        .catch(error => {
            console.error("Erro na requisição:", error.message || error);
        });
    });
}