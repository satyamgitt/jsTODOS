// let form = document.getElementById("form");
// let textInput = document.getElementById("textInput");
// let dateInput = document.getElementById("dateInput");
// let textArea = document.getElementById("textArea");
// let error = document.getElementById("error");
// let dataAdd = document.getElementById("dataAdd");
// let tasks = document.getElementById("tasks")
// // console.log(tasks);

// // console.log(textInput);

// let storeData = []

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log("button clicked");
//     formValidation()
// })


// let formValidation = () => {
//     if (textInput.value === "") {
//         error.innerHTML = "task can't be empty"
//     } else {
//         console.log("sucess");
//         error.innerHTML = " "
//         readData()
//         creatData()
//     }
// }


// let readData = () => {
//     storeData.push({
//         text: textInput.value,
//         date: dateInput.value,
//         desc: textArea.value
//     })

//     console.log(storeData);
// }


// let creatData = ()=>{
//     tasks.innerHTML += 
//     `
//     <div><span class="fw-bold">Task 1</span>
//                 <p class="small text-secondary ">2022-08-22</p>
//                 <p>Going gym to workout</p>
//                 <span class="options">
//                     <b onClick="updateTask(this)" data-bs-toggle="modal" data-bs-target="#form">E</b>
//                     <b onClick="deleteTask(this)">X</b>
//                 </span>
//             </div>
    
//     `
// }