
// ADD TASK MAIN BUTTON FUNCTION 

function addTask() {

    var taskParent = document.getElementById("taskParent")

    var inputField = document.getElementById("inputField")

    // console.log("inputField",inputField.value,"taskParent",taskParent)


    var li = document.createElement("li")
    li.innerHTML = inputField.value
    console.log("list", li)

    // CREATING DYNAMIC EDIT BUTTON 

    var editbtn = document.createElement("button")
    editbtn.setAttribute("onClick", "dymEdit(this)")
    editbtn.innerHTML = "EDIT"


    // CREATING DYNAMI SINGLE DELETE BUTTON

    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("onClick", "dymDel(this)")
    deleteBtn.innerHTML = "DELETE"

    // APPEND LI TO OL AND BOTH BUTTONS TO LI
    li.appendChild(editbtn)
    li.appendChild(deleteBtn)

    taskParent.appendChild(li)

}

// CREATING DYNAMIC SINGLE DELETE BUTTON FUNC.

function dymDel(ele) {
    // console.log(ele.parentNode.remove())
    ele.parentNode.remove()
}

// CREATING DYNAMIC EDIT BUTTON FUNC.

 function dymEdit(ele) {
    // console.log(ele,
    // ele.previousSibling.nodeValue = "hello world")

    var editVal = prompt("enter value",ele.previousSibling.nodeValue)
    ele.previousSibling.nodeValue = editVal
}

// ADD ALL DELETE MAIN BUTTON FUNCTION
function delBtn(){
    var alldlt = document.getElementById("taskParent")
    alldlt.innerHTML = ""
}








































