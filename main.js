let form = document.getElementById("form")
let textInput = document.getElementById("textInput")
let dateInput = document.getElementById("dateInput")
let textarea = document.getElementById("textarea")
let msg = document.getElementById("msg")
let tasks = document.getElementById("tasks")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("clicked");
    formValidation()

})

let formValidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Task can't be empty";

    } else {
        console.log("success");
        msg.innerHTML = ""
        readData();

        add.setAttribute("data-bs-dismiss", "modal")
        add.click();

        (()=>{
            add.setAttribute("data-bs-dismiss", "")
        })()



    }
}
let array = []


let readData = () => {

    array.push(
        {
            task: textInput.value,
            date: dateInput.value,
            textArea: textarea.value
        }
    )


    // console.log(array);

    localStorage.setItem("key", JSON.stringify(array))

    createData()

}




let createData = () => {

    tasks.innerHTML = ""
    array.map((value, index) => {

        let {task,date,textArea } = value
        return (
            tasks.innerHTML += `
            <div id=${index}>
                <span class="fw-bold">${task}</span>
                <span class="small text-secondary">${date}</span>
                <p>${textArea}</p>
        
                <span class="options">
                  <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                  <i onClick ="deleteTask(this)" class="fas fa-trash-alt"></i>
                </span>
              </div>
            
            `
        )
    })
    resetForm()

}

let resetForm = () => {
    textInput.value = ""
    dateInput.value = ""
    textarea.value = ""

}


let deleteTask = (e) => {
    e.parentElement.parentElement.remove()

    let index = e.parentElement.parentElement.id
    array.splice(index, 1)
    localStorage.setItem("key", JSON.stringify(array))

}



let editTask = (e) => {
    let selectedData = e.parentElement.parentElement

    // console.log(selectedData);
    textInput.value = selectedData.children[0].innerHTML
    dateInput.value = selectedData.children[1].innerHTML
    textarea.value = selectedData.children[2].innerHTML

    deleteTask(e)
    // selectedData.remove(e)
}


(() => {
    array = JSON.parse(localStorage.getItem("key")) || []
    // console.log(array);

    createData()
})()