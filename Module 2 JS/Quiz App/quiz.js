var questions = [
    question1 = {
        id: 1,
        question: "The full form of CSS is:",
        options: {
            a: "Cascading Style Sheet",
            b: "Cascading Style System",
            c: "Cascading Special Sheet",
            d: "None of the above",
        },
        answer: "Cascading Style Sheet"
    },
    question2 = {
        id: 2,
        question: "The full form of HTML is:",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Markup Link",
            c: "Hyper Text Markup List",
            d: "None of the above",
        },
        answer: "Hyper Text Markup Language"
    },
    question3 = {
        id: 3,
        question: "The full form of JS is:",
        options: {
            a: "Java Script",
            b: "Java Style",
            c: "Java System",
            d: "None of the above",
        },
        answer: "Java Script"
    },
    question4 = {
        id: 4,
        question: "How can we change the background color of an element?",
        options: {
            a: "Background Color",
            b: "Color",
            c: "Bg Color",
            d: "All of the above",
        },
        answer: "Background Color"
    },
    question5 = {
        id: 5,
        question: "How can we change the text color of an element?",
        options: {
            a: "Background Color",
            b: "Color",
            c: "Bg Color",
            d: "All of the above",
        },
        answer: "Color"
    },
    question6 = {
        id: 6,
        question: "In how many ways can CSS be written in?",
        options: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        answer: "3"
    },
    question7 = {
        id: 7,
        question: "Can negative values be allowed in padding property?",
        options: {
            a: "Yes",
            b: "No",
            c: "Vary to property",
            d: "None of the above",
        },
        answer: "No"
    },
    question8 = {
        id: 8,
        question: "Which property is used to set the text decoration?",
        options: {
            a: "text-decorate: underline;",
            b: "text-decoration: underline;",
            c: "decorate: underline;",
            d: "None of the above",
        },
        answer: "text-decoration: underline;"
    }
]
// console.log(question)

var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
localStorage.getItem("name")
localStorage.getItem("email")
var quizQuestions = document.getElementById("quizQuestions")
var quizOptions = document.getElementById("quizOptions")
var indexNum = 0

// COUNTER
var currentPage = document.getElementById("currentPage")
var totalPages = document.getElementById("totalPages")
totalPages.innerHTML = questions.length



function startQuiz() {
    // console.log("startQuiz",question[indexNum].question)
    quizQuestions.innerHTML = questions[indexNum].question

    quizOptions.innerHTML = ""

    for (var key in questions[indexNum].options) {
        //    console.log(question[indexNum].options[key])
        var mcqs = questions[indexNum].options[key]
        //    console.log(mcqs)
        // quizOptions.innerHTML += `<li>${on}</li>`
        quizOptions.innerHTML += `<li onclick="checkAnswers(this)">${mcqs}</li>`
    }

}

var quizBox = document.getElementById("quizBox")
var nextQuesBtn = document.getElementById("nextQuesBtn")
var resultContainer = document.getElementsByClassName("resultContainer")[0]
var rightAnswers = document.getElementById("rightAnswers")
var wrongAnswers = document.getElementById("wrongAnswers")
var rightAnsCount = 0
var wrongAnsCount = 0

function nextQues() {
    //  console.log("next")
    if (indexNum < questions.length - 1) {
        indexNum++
        currentPage.innerHTML++
        // console.log("indexNum")
        nextQuesBtn.className = "hide"
        startQuiz()
    } else if (indexNum === questions.length - 1) {
        console.log("show")
        //  quizBox.style.visibility = "hidden"
        quizBox.style.display = "none"
        resultContainer.className = "show"
        rightAnswers.innerHTML = rightAnsCount
        wrongAnswers.innerHTML = wrongAnsCount

    }
}

function checkAnswers(ele) {
    // console.log(ele.innerHTML)
    var liQuizOptions = quizOptions.getElementsByTagName("li")
    var isCheck = liQuizOptions === questions[indexNum].answer
    if (isCheck) {
        rightAnswers++
        ele.className = "rightAnswers"
    } else {
        wrongAnswers++
        ele.className = "wrongAnswers"
    }
    for (var li in liQuizOptions) {
        if (li.innerHTML === questions[indexNum].answer) {
            li.className = "rightAnswers"
        }


    }
}

for (var li in quizOptions) {
    // li.style.pointerEvents = "none"
    // li.style.cursor = "no-drop"
}
nextQuesBtn.className = "show"