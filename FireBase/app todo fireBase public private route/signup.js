import { app, auth, createUserWithEmailAndPassword,collection, addDoc,db } from "./firebase.js"

const globalCollection = collection(db, "usersInfo")

const signUpHandler = async () => {
    try {
        const firstNameInput = document.querySelector(".firstNameInput").value
        const lastNameInput = document.querySelector(".lastNameInput").value
        const userNameInput = document.querySelector(".userNameInput").value
        const emailInput = document.querySelector(".emailInput").value
        const passwordInput = document.querySelector(".passwordInput").value
         // console.log(firstNameInput,lastNameInput,passwordInput,emailInput,userNameInput)
        const userObj = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            userName: userNameInput,
         }
        await addDoc(globalCollection,userObj)
        const response = await createUserWithEmailAndPassword(auth,emailInput,passwordInput)
        const uid = response.user.uid
        alert("Sucessfully Signup")
        window.location.href = "./login.html"
         console.log(uid)

    } catch (error) {
        alert(error.message)
    }

   

}



















window.signUpHandler = ("click", signUpHandler)