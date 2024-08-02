window.addEventListener(("load"), ()=>{
if(!localStorage.getItem("userid")){
    window.location.href = "./login.html"
}
})



import { app, db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "./firebase.js"
// console.log(app)
// console.log(db)

const globalCollection = collection(db, "user")
const submitBtn = document.getElementById("submitBtn")
const DeleteAllBtn = document.getElementById("DeleteAllBtn")
const taskParent = document.getElementById("taskParent")



submitBtn.addEventListener("click", async () => {
    // console.log("click")
    try {
        const inputField = document.getElementById("inputField")
        const input = inputField.value
        if(inputField.value.length < 3){
            alert("Please enter a task with at least 3 characters")
            return
        }
        console.log(input, "input")
        const userObj = {
            value: input
        }
        const uploadData = await addDoc(globalCollection, userObj)
        loadBody()
        console.log(uploadData.id, "uploadData")


    } catch (error) {
        console.log("error", error.message)
    }
})



const loadBody = async () => {

    try {
        taskParent.innerHTML = ""
        const empArr = []
        const response = await getDocs(globalCollection)
        // console.log(response, "response")
        response.forEach(docs => {
            const objQuery = {
                id: docs.id,
                ...docs.data()
            }
            empArr.push(objQuery)
            // console.log(objQuery)
            taskParent.innerHTML += `<div class="card" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">${objQuery.value}</h5>
                <button type="button" class="btn btn-primary" onclick="editTask(this)" id="${objQuery.id}">EDIT</button>
                <button type="button" onclick="deleteTask(this)" id="${objQuery.id}" class="btn btn-danger">DELETE</button>
            </div>`

        })
    } catch (error) {
        console.log("error", error.message)
    }
}

// YAHAN MASLA HAI

const deleteTask = async (ele) => {
    // console.log(ele.id)
    try {
        await deleteDoc(doc(db, "user", ele.id))
         console.log("run")
        loadBody()

    } catch (error) {
        console.log("error", error.message)
    }
}

const editTask = async (ele) => {
    // console.log("editTask", ele)
    try {
        
        console.log(ele.id)
        let editValue = prompt("Edit value")
        // editValue.value = objQuery.value

        const updateData = doc(db, "user", ele.id);

        // Set the "capital" field of the city 'DC'
         await updateDoc(updateData, {
             value: editValue
         });
         loadBody()



    } catch (error) {
        console.log("error", error.message)
    }
}

DeleteAllBtn.addEventListener("click",()=>{
    
    try {
        console.log("delete")
        
    } catch (error) {
        console.log("error",error.message)
    }
})









window.editTask = editTask
window.deleteTask = deleteTask
window.addEventListener("load", loadBody)