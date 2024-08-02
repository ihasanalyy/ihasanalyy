// window.addEventListener("load" , ()=>{
//     if(localStorage.getItem("userid")){
//         window.location.replace("./index.html")
//     return
//     }
// })

import {auth, signInWithEmailAndPassword } from "./firebase.js"
console.log(auth,signInWithEmailAndPassword)

const loginBtn = document.getElementById("loginBtn")


loginBtn.addEventListener("click",async()=>{
    try {
         // console.log("run")
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email,password)
    const loginResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
    )
console.log(loginResponse)
window.location.replace("./index.html")
    } catch (error) {
        console.log("error",error.message)
    }
   
})




























window.loginBtn = loginBtn("click",loginBtn)