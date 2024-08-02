import { collection, getDocs,db } from "./firebase.js"
const globalCollection = collection(db, "usersInfo")
const dynamicData = document.querySelector(".dynamicData")
window.addEventListener("load", async () => {
    try {
        const querySnapshot = await getDocs(globalCollection);
        const tempArr = []
        querySnapshot.forEach((docs)=>{
            const tempObj = {
                firstName: docs.data().firstName,
                lastName: docs.data().lastName,
                userName: docs.data().userName,
            }
            // console.log(docs.data());
            tempArr.push(tempObj)
            dynamicData.innerHTML = `<label for="exampleFormControlInput1" class="form-label">First Name</label>
            <input type="text" class="form-control" disabled placeholder="${tempObj.firstName}" id="exampleFormControlInput1">
            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
            <input type="text" class="form-control" disabled placeholder="${tempObj.lastName}" id="exampleFormControlInput1">
            <label for="exampleFormControlInput1" class="form-label">User Name</label>
            <input type="text" class="form-control" disabled placeholder="${tempObj.userName}" id="exampleFormControlInput1">`
        })
    } catch (error) {
        alert(error.message)
    }
})



const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}





















window.logoutHandler = ("click", logoutHandler)