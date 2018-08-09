// GLOBAL VARIABLES
// -----------------------------
var numCorrect = 0;
var numIncorrect = 0;
var intervalId;
var count;
var questionNum = 1;

// FUNCTIONS
// -----------------------------
// function initialize ()
    // reset global variables
    // call nextQuestion(1)

// function nextQuestion()
    // clear mainContent
    // make div for time remaining
    // make div for question
    // make div for radio buttons
    // questionNum++
    // call countdown()

// function countdown()

    // start countdown
    // update display every second
    // if timer reaches 0, call answerWrong()

function startTimer() {
    count = 30;
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
};

function countdown() {
    count--;
    $("#timer").text("Time remaining: " + count + " seconds");
    if (count == 0) {
        answerWrong();
    }
};

// answerRight()
    // display congratulations
    // wait 3 seconds
    // if not last question
        // call nextQuestion(questionNum)
    // else
        // call finish()

// answerWrong()
    // display condemnation
    // wait 3 seconds
    // if not last question
        // call nextQuestion(questionNum)
    // else
        // call finish()
function answerWrong() {
    alert("you suck!");
    clearInterval(intervalId);
}

// function finish()
    // clear mainContent
    // display results
    // display restart button

// CALLS
// -----------------------------
// initialize()

// submit.on(click)
    // if answer correct
        // call answerRight()
    // else
        // call answerWrong()

// restart.on(click)
    // call initialize()