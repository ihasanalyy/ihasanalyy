var mintues = document.getElementById("mintues")
var seconds = document.getElementById("seconds")
var display = document.getElementById("display")
var start = document.getElementById("start")

// func to display time output on input

function displayMin() {
    display.innerHTML = (mintues.value > 9? "0" + mintues.value : mintues.value) + ":" + (seconds.value > 9? "0" + seconds.value : seconds.value)


}

// func to coutndown

function watch() {
    start.disabled = true
    mintues.disabled = true
    seconds.disabled = true
    var date1 = new Date()
    var countDownDate = new Date()
    countDownDate.setTime(date1.getTime() + (mintues.value * 60 * 1000) + (seconds.value * 1000) + (1 * 1000))

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        display.innerHTML = (mintues > 9? "0" + mintues : mintues) + ":" + (seconds > 9? "0" + seconds : seconds)

    })
}