function submit(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var nameError = document.getElementById("nameReq")
    var emailError = document.getElementById("emailReq")
    var readyBtnDiv = document.getElementById("readyBtnDiv")
    var parentDiv = document.getElementById("parentDiv")
    // console.log(name,email,nameError,emailError)

    
    nameError.className = "hide"
    emailError.className = "hide"
   

    if(!name.value){
        nameError.className = "show"
        nameError.style.color = "red"
        return
    }
    if(!email.value){
        emailError.className = "show"
        emailError.style.color = "red"
        return
    }

    localStorage.setItem("name",name.value)
    localStorage.setItem("email",email.value)

    parentDiv.className = "hide"
    readyBtnDiv.className = "show"
 


}