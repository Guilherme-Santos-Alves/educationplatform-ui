const tokenJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZW1hckBlbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzMwOTMwMDUxLCJpc3MiOiJFZHVjYXRpb24gUGxhdGZvcm0iLCJhdWQiOiJTdHVkZW50LCBBZG1pbmlzdHJhdG9yIn0.kIb3O8acmsSaURZKF5QkiZBxlM4eCytHJfKgPVr-_3U';



document.addEventListener('DOMContentLoaded', () => {
    getCourseUpdate(1);

    let inputName = document.getElementById('cs-name');
    let inputDesc = document.getElementById('cs-desc');
    let inputCover = document.getElementById('cs-cover');
    let selectSignature = document.getElementById('cs-signature');

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
                selectSignature.sel

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