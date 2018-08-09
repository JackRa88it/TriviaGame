// GLOBAL VARIABLES
// -----------------------------
// var numCorrect = 0
// var numIncorrect = 0
// var countdown (30 seconds)
// var questionNum = 1

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
    // clear existing countdown
    // start countdown
    // update display every second
    // if timer reaches 0, call answerWrong()

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