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
        });
    });
}