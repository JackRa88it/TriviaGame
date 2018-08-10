// GLOBAL VARIABLES
// -----------------------------
var numCorrect = 0;
var numIncorrect = 0;
var intervalID;
var count;
var qCount = 0;

var questions = [
    {
        question: "What is your name?",
        choices: ["Sir Galahad the Wise", "Sir Bedevere the Pure", "Sir Lancelot the Brave", "Arthur, King of the Saxons"],
        answer: 2
    },
    {
        question: "What is your quest?",
        choices: ["To seek the Holy Grail", "To find the Castle Anthrax again", "To open a roth IRA and begin acting fiscally responsible", "Burn the witch!!!"],
        answer: 0
    },
    {
        question: "What is your favorite color?",
        choices: ["Green", "Blue", "Blue--no, wait--Yellow!", "She turned me into a newt!!!"],
        answer: 1
    },
    {
        question: "What was the capital of Assyria?",
        choices: ["Guzana", "Kahat", "Nineveh", "I got better..."],
        answer: 2
    },
    {
        question: "What is the airspeed velocity of an unladen swallow?",
        choices: ["12 meters/second", "9 meters/second", "This question is stupid", "An African or European Swallow?"],
        answer: 3
    }
    
]

// FUNCTIONS
// -----------------------------
function initialize() {
    numCorrect = 0;
    numIncorrect = 0;
    clearInterval(intervalID);
    count = 30;
    qCount = 0;
    nextQuestion(qCount);
};

// function nextQuestion()
    // clear mainContent
    // make div for time remaining
    // make div for question
    // make div for radio buttons
    // qCount++
    // call countdown()
function nextQuestion(q) {
    $('#display').empty();
    count = 30;

    var timer = $('<div>');
    timer.attr('id', 'timer');
    timer.text("Time remaining: " + count + " seconds");

    var question = $('<div>');
    question.attr('id', 'question');
    question.text(questions[q].question);

    var button0 = $('<button>');
    button0.attr({'id':'button0', 'value':0});
    button0.text(questions[q].choices[0]);

    var button1 = $('<button>');
    button1.attr({'id':'button1', 'value':1});
    button1.text(questions[q].choices[1]);

    var button2 = $('<button>');
    button2.attr({'id':'button2', 'value':2});
    button2.text(questions[q].choices[2]);

    var button3 = $('<button>');
    button3.attr({'id':'button3', 'value':3});
    button3.text(questions[q].choices[3]);

    $('#display').append(timer, question, button0, button1, button2, button3);
    startTimer();
}

// function countdown()

    // start countdown
    // update display every second
    // if timer reaches 0, call answerWrong()

function startTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(countdown, 1000);
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
        // call nextQuestion(qCount)
    // else
        // call finish()

// answerWrong()
    // display condemnation
    // wait 3 seconds
    // if not last question
        // call nextQuestion(qCount)
    // else
        // call finish()
function answerWrong() {
    alert("you suck!");
    clearInterval(intervalID);
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