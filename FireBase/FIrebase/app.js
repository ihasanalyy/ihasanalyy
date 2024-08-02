import {app,db, getFirestore, collection, addDoc, getDocs} from "./firebase.js";
console.log(app,db, getFirestore, collection, addDoc, getDocs)

const sumitbtn = document.getElementById("sumitbtn")
sumitbtn.addEventListener("click",async ()=>{
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userObjData = {
        email: email.value,
        password: password.value
    }
 const userCollection = collection(db,"userDta")
const userDoc = await addDoc(userCollection,userObjData)
console.log(userDoc)
})













const contactbtn = document.getElementById("contactbtn")
contactbtn.addEventListener("click", async ()=>{
const contactUser = document.getElementById("contact")
const userDataCol = {
    contact: contactUser.value
}
const userCollection = collection(db,"user")
const response = await addDoc(userCollection,userDataCol)
console.log(response)
})