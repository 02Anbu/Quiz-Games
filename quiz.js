let timeLeft = 35;
let score = 0;
let currentQuestion = 0;
let timer; // Declare the timer variable globally

const questions = [
    {
        question: "Which you like the most of your papa",
        options: ["Simile", "Angry", "Crying", "None"],
        answer: "Simile"
    },
    {
        question: "Which is the papa's most favo food",
        options: ["Briyani", "Noodles", "Sandwitch", "Tomatorice"],
        answer: "Tomatorice"
    },
    {
        question: "Most important person in your papa's life",
        options: ["Mani", "Mom", "Dad", "Sis"],
        answer: "Mani"
    },
    {
        question: "which is papa favo colour",
        options: ["Blue", "Pink", "Purple", "Black"],
        answer: "Black"
    },
    {
        question: "Which dress papa like the most",
        options: ["Jean", "Saree", "Chuti", "All above"],  
        answer: "All above"
    },
    {
        question: "Which is the most liked places of your papa",
        options: ["Water", "Gaming", "Movie", "Travel"],
        answer: "Water"
    },
    {
        question: "Which is the papa's most favo sweet",
        options: ["Pallkova", "Mysorepa", "Laddu", "Allva"],
        answer: "Pallkova"
    },
    {
        question: "Our anniversary date",
        options: ["Sep9", "Oct 5", "Oct 18 ", "Sep 20"],
        answer: "Oct 5"
    },
    {
        question: "Which thing is papa get too angry",
        options: ["Avoiding", "Sharing", "Thirdperson", "All Above"],
        answer: "Thirdperson"
    },
    {
        question: "Which one is papa get too happy",
        options: ["MyPapa", "Food", "Travel", "All above"],  
        answer: "MyPapa"
    }
];

function displayQuestion() {
    const currentQues = questions[currentQuestion];
    const questionText = document.querySelector(".text");
    questionText.textContent = currentQues.question;

    const optionButtons = document.querySelectorAll(".option");
    currentQues.options.forEach((option, index) => {
        optionButtons[index].textContent = option;
    });
}

function startTimer() {
    clearInterval(timer); // Clear the existing timer before starting a new one
    const timerElement = document.getElementById("timer");
    timeLeft = 35; // Reset timeLeft to initial value
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `<b>Time: ${timeLeft}s</b>`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(answer) {
    const currentQues = questions[currentQuestion];
    if (answer === currentQues.answer) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        clearInterval(timer);
        document.getElementById("timer").style.display = "none";
        document.getElementById("score").innerHTML = `Your Score: ${score}`;
        document.querySelector(".option1").style.display = "none";
        document.getElementById("restartButton").style.display = "block";
        return;
    }
    startTimer();
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    displayQuestion();
    document.querySelectorAll(".option").forEach(button => button.style.display = "block"); 
    document.querySelector(".option1").style.display = "block"; 
    startTimer();
    document.getElementById("timer").style.display = "block";
    document.getElementById("score").innerHTML = `Your Score: ${score}`;
    document.getElementById("restartButton").style.display = "none";
}


displayQuestion();
startTimer();
