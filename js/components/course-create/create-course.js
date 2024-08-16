const tokenJwt = localStorage.getItem("tokenJwt");

function createCourse() {
    const requestBody = {
        subscriptionId: 0,
        name: 'string',
        description: 'string',
        cover: 'string',
        active: true //or false
    }
    
    fetch(`https://localhost:7092/api/courses`, {
        method: 'GET',
        headers: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        },
    })
}


