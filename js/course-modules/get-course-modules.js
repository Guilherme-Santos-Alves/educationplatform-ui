
    


// const tokenJwt = localStorage.getItem("tokenJwt");

// fetch(`https://localhost:7092/api/modules/${id}`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//     },
// })
// .then((response) => {
//     response.json().then((modules) => { 
//         modules.forEach(module => {
//             const template = `
//                 <div class="module">
//                     <div class="module-header">
//                         <h2 class="title">${module.name}</h2>
//                         <button class="show-lessons-btn">
//                             <i class="fa-solid fa-chevron-right"></i>
//                         </button>
//                     </div>
//                     <ul class="module-lessons">
//                             <div class="lesson-content">
//                                 <div class="lesson-status -finished">
//                                     <i class="fa-solid fa-circle-check"></i>
//                                 </div>
//                                 <ul class="lesson-name">aula Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ul>
//                             </div>
//                             <div class="lesson-content" data-translate="">
//                                 <div class="lesson-status -finished">
//                                     <i class="fa-solid fa-circle-check"></i>
//                                 </div>
//                                 <ul class="lesson-name">aula Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ul>
//                             </div>
//                             <div class="lesson-content">
//                                 <div class="lesson-status -finished">
//                                     <i class="fa-solid fa-circle-check"></i>
//                                 </div>
//                                 <ul class="lesson-name">aula Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ul>
//                             </div>
//                             <div class="lesson-content">
//                                 <div class="lesson-status">
//                                     <i class="fa-solid fa-circle-check"></i>
//                                 </div>
//                                 <ul class="lesson-name">aula Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ul>
//                             </div>
//                         </ul>
//                     </ul>
//                 </div>
//             `;

//             document.querySelector(".course-modules").insertAdjacentHTML("beforeend", template); 
//         });
//     });
// })

