import { auth, signInWithEmailAndPassword } from "./firebase.js"



const loginHandler = async () => {
    try {
        const emailInput = document.querySelector(".emailInput").value
        const passwordInput = document.querySelector(".passwordInput").value
        console.log(emailInput, passwordInput)
        const response = await signInWithEmailAndPassword(auth, emailInput, passwordInput)
        const userID = response.user.uid
        localStorage.setItem("user",userID)
        alert("Sucessfully Login")
        window.location.href = "./index.html"
        console.log(userID)
        

    } catch (error) {
        alert(error.message)
    }

}





















window.loginHandler = ("click", loginHandler)