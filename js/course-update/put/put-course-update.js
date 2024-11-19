function putCourseUpdate(courseData) {
    fetch(`https://localhost:7092/api/courses/${courseData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJwt}`
        },
        body: JSON.stringify(courseData)
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
}