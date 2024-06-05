// console.log("hello world")

var hour = document.getElementById("hour")
var mintHeading = document.getElementById("mintHeading")
var secHeading = document.getElementById("secHeading")
var milSecHeading = document.getElementById("milSecHeading")
var interval;
// var stopTime = true

var milSec = 0
var sec = 0
var mint = 0
var hour = 0

// CALLING INTERNAL JS START FUNCTION

function start(){
    milSec++
    milSecHeading.innerHTML = milSec

    if (milSec === 100) {
        sec++
        secHeading.innerHTML = sec
        milSec = 0

    } else if (sec > 59){
        mint++
        mintHeading.innerHTML = mint
        sec = 0

    } else if (mint > 59){
        hour++
        hour.innerHTML = hour
        sec = 0
        mint = 0

    }
}






// CALLING FUNCTIONS


function startWatch(){
    interval = setInterval(start,10)
    var startbtn = document.getElementById("startbtn")
    startbtn.disabled = true
    
}




function reset(){
    clearInterval(interval)
    var startbtn = document.getElementById("startbtn")
    startbtn.disabled = false

    milSecHeading.innerHTML = "00"
    secHeading.innerHTML = "00" 
    mintHeading.innerHTML = "00" 
    hour.innerHTML = "00"  
    milSec = 0
    sec = 0
    mint = 0
    hour = 0
}

function stopWatch(){
    clearInterval(interval)
    // console.log(stopWatch)
    var startbtn = document.getElementById("startbtn")
    startbtn.disabled = false
    }

