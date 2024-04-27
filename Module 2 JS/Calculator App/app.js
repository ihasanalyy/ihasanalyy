function addvalue (num){
    var inputField = document.getElementById("inputField")
    inputField.value +=num
}

function result(){
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value)
}

function AllClear(){
    var inputField = document.getElementById("inputField")
    inputField.value = ""
}

function singleDelete(){
    var inputField = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0,-1)
}