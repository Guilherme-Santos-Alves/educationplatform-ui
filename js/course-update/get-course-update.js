document.addEventListener('DOMContentLoaded', () => {
    let inputName = document.getElementById('cs-name');
    let inputDesc = document.getElementById('cs-desc');
    let inputCover = document.getElementById('cs-cover');
    let selectSignature = document.getElementById('cs-signature');

    const courseId = sessionStorage.getItem('courseId');
    //getCourseUpdate(courseId);
   // getModuleUpdate(courseId);

    //testes
    getCourseUpdate(2);
    getModuleUpdate(2);

    //     Usar na pagina de selecionar o curso a ser editado
    //     const courseId = 2;
    //     sessionStorage.setItem('courseId', courseId);

    function getCourseUpdate(courseId) {
        fetch(`https://localhost:7092/api/courses/${courseId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJwt}`
            },
        })
        .then( response => {
            response.json().then(course => {
                const courseData = course.data;
                console.log(courseData);
                console.log(courseData.id);
                inputName.value = courseData.name;
                inputDesc.value = courseData.description;
                inputCover.value = courseData.cover;

                getSubscriptions().then( subscriptions => {

                    console.log(subscriptions);

                    subscriptions.forEach(subscription => {
                        const optionSubscription = document.createElement('option');
    
                        optionSubscription.value = subscription.id;
                        
                        optionSubscription.textContent = subscription.name;
                        selectSignature.appendChild(optionSubscription);

                        if (courseData.subscriptionId == optionSubscription.value) {
                            optionSubscription.selected = true;
                            console.log(courseData.subscriptionId);
                        }
                    });
                });
            });
        });
    };
});