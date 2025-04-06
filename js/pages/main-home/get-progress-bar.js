document.addEventListener('DOMContentLoaded', () => {
    const allCourses = document.querySelectorAll('.courses');

    allCourses.forEach( course => {
        const courseId = course.getAttribute('data-course-id');
        const userSession = JSON.parse(localStorage.getItem('userSession'));
        const userId = userSession.userId;

        console.log('user: ', userId, 'course: ', courseId);

        // fetch(`https://localhost:7092/api/users/${userId}/courses/${courseId}`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${tokenJwt}`
        //     },
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         return response.text().then(errorText => {
        //             const error = new Error(errorText);
        //             error.status = response.status;
        //             throw error;
        //         });
        //     }
        //     return response.json();
        // })
        // .then(courses => {
            
        // })
        // .catch(error => {
            
        // });
    });

})