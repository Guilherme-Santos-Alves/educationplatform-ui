function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const courseId = getQueryParam('courseId');

document.addEventListener('DOMContentLoaded', () => {
    let inputName = document.getElementById('cs-name');
    let inputDesc = document.getElementById('cs-desc');
    let inputCover = document.getElementById('cs-cover');
    let selectSubscription = document.getElementById('cs-subscription');
    
    getCourseUpdate(courseId);
    getModuleUpdate(courseId);

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
                        selectSubscription.appendChild(optionSubscription);

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