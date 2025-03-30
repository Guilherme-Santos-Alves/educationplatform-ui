document.addEventListener('DOMContentLoaded', () => {
    const formCourse = document.getElementById('form-course-edit');
    let inputName = document.getElementById('cs-name');
    let inputDesc = document.getElementById('cs-desc');
    let inputCover = document.getElementById('cs-cover');
    
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
        .then(response => {
            if (!response.ok) {
                return response.text().then(errorText => {
                    throw new Error(errorText);
                });
            }
            return response.json();
        })
        .then(course => {
            const courseData = course.data;
            inputName.value = courseData.name;
            inputDesc.value = courseData.description;
            inputCover.value = courseData.cover;
            formCourse.setAttribute('data-course-id', `${courseData.id}`);
            setupDeleteCourseEvents();
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                text: `${error.message}`,
                showConfirmButton: true,
                timer: 2000
            });
        });
    };
});