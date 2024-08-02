const idFound = localStorage.getItem("user")
if(!idFound){
    window.location.replace("./login.html")
}




import { app, db, collection, addDoc, getDocs,doc, deleteDoc,updateDoc  } from "./firebase.js"

const globalCollection = collection(db, "user")
const inputField = document.querySelector("#inputField")
const taskParent = document.querySelector("#taskParent")

const submitBtn = async () => {
    try {

        console.log(inputField)
        const userObj = {
            value: inputField.value
        }
        const response = await addDoc(globalCollection, userObj)
        console.log(response)
        getdata()

    } catch (error) {
        alert(error.message)
    }
}

const getdata = async () => {
    try {
        const getRes = await getDocs(globalCollection)
        let emptyArr = []
        taskParent.innerHTML = ""
        getRes.forEach((doc) => {
            const Obj = {
                id: doc.id,
                value: doc.data().value
            }
            emptyArr.push(Obj)
            taskParent.innerHTML += `<div class="card" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">${Obj.value}</h5>
                <button type="button" class="btn btn-primary" id= "${Obj.id}" onclick=edit(this)>Edit</button>
                <button type="button" class="btn btn-danger" id= "${Obj.id}" onclick=deletebtn(this)>DELETE</button>
            </div>`
        });


    } catch (error) {
        alert(error.message)
    }
}

const edit = async (ele)=>{
    try {
        console.log(ele.id)
        const editValue = prompt("Enter value")
        await updateDoc(doc(db,"user",ele.id),{
            value:editValue
        })
        getdata()
        
    } catch (error) {
        alert(error.message)
    }}

const deletetbn = async (ele) =>{
 try {
    console.log(ele.id)
    await deleteDoc(doc(db,"user",ele.id))
    getdata()
 } catch (error) {
    alert(error.message)
 }
}

const deleteAll = ()=> {
    try {
        console.log("run")
    } catch (error) {
        alert(error.message)
    }
}














window.edit = edit;
window.deletebtn = deletetbn;
window.submitBtn = submitBtn
window.deleteAll = deleteAll




















