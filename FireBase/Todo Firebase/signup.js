window.addEventListener("load" , ()=>{
    if(localStorage.getItem("userid")){
        window.location.replace("./index.html")
    return
    }
})

import { auth, createUserWithEmailAndPassword, setDoc ,doc,db } from "./firebase.js";
// console.log(auth, createUserWithEmailAndPassword)


const signUpBtn = document.getElementById("signUpBtn")
signUpBtn.addEventListener("click", async () => {
    try {
        const email = document.getElementById("Email").value
        const password = document.getElementById("password").value
        const name = document.getElementById("Name").value
        const contact = document.getElementById("contact").value
        const userObj = {
            email: email,
            name: name,
            contact: contact
        }
        console.log(userObj)
        const responseSignUp = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        console.log(responseSignUp)
        const uid = responseSignUp.user.uid
        localStorage.setItem("userid" , uid)
        const responseSetDoc = await setDoc(doc(db, "userSignupData", uid), {userObj});
        console.log(responseSetDoc,"sucessfully signup")
        window.location.href = "./login.html"
          
    } catch (error) {
        console.log("error", error.message)
    }

})
































window.signUpBtn = ("click", signUpBtn)