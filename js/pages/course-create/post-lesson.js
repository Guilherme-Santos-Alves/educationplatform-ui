async function sendLessons(moduleId, module) {
    console.log('cad aula: ', moduleId);
    const allLessons = Array.from(module.querySelectorAll('.lesson-group'))
        .sort((a, b) => a.dataset.index - b.dataset.index);

    for (const lesson of allLessons) {
        const lessonName = lesson.querySelector('.video-lesson-name');
        const lessonLink = lesson.querySelector('.video-lesson-link');
        const lessonDescription = lesson.querySelector('.video-lesson-description');

        const jsonDataLessons = {
            name: lessonName.value.trim(),
            description: lessonDescription.value.trim(),
            video: lessonLink.value.trim(),
            moduleId: moduleId
        };

        console.log(jsonDataLessons);


        try {
            const response = await fetch(`https://localhost:7092/api/videolessons`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenJwt}`
                },
                body: JSON.stringify(jsonDataLessons)
            });

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            clearFormData();
        } catch (error) {
            if (error.errors) {
                for (let field in error.errors) {
                    if (error.errors.hasOwnProperty(field)) {
                        error.errors[field].forEach(errorMessage => {
                            Swal.fire({
                                text: `${errorMessage}.`,
                                icon: "error"
                            });
                        });
                    }
                }
            } else {
                Swal.fire({
                    text: `Não foi possível cadastrar uma ou mais aulas.`,
                    icon: "error"
                });
            }
        }
    }
}