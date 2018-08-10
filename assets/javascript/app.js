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
    
];

// FUNCTIONS
// -----------------------------
function initialize() {
    numCorrect = 0;
    numIncorrect = 0;
    clearInterval(intervalID);
    count = 30;
    qCount = 0;
    $('#timer').empty();
    $('#question').empty();
    $('#response').empty();
    $('#start').attr('style', 'display:initial');
};
// need a START screen, so initialize() should have button to do nextQuestion()

function nextQuestion(q) {
    $('#question').empty();
    $('#response').empty();
    count = 30;

    $('#timer').text("Time remaining: " + count + " seconds");

    $('#question').text(questions[q].question);

    var button0 = $('<button>');
    button0.attr({'class':'choice', 'value':0});
    button0.text(questions[q].choices[0]);

    var button1 = $('<button>');
    button1.attr({'class':'choice', 'value':1});
    button1.text(questions[q].choices[1]);

    var button2 = $('<button>');
    button2.attr({'class':'choice', 'value':2});
    button2.text(questions[q].choices[2]);

    var button3 = $('<button>');
    button3.attr({'class':'choice', 'value':3});
    button3.text(questions[q].choices[3]);

    $('#response').append(button0, '<br>', button1, '<br>', button2, '<br>', button3);
    startTimer();
};

function startTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(countdown, 1000);
};

function countdown() {
    count--;
    $("#timer").text("Time remaining: " + count + " seconds");
    if (count == 0) {
        answerWrong();
    };
};

// answerRight()
    // display congratulations
    // wait 3 seconds
    // if not last question
        // call nextQuestion(qCount)
    // else
        // call finish()
function answerRight() {
    clearInterval(intervalID);
    $('#question').text("CORRECT!");
    $('#response').empty();
    var img = $('<img>');
    img.attr('src', 'assets/images/camelotDance.gif');
    $('#response').append(img);
    qCount++;
    setTimeout(function() {
        nextQuestion(qCount);
    }, 3000);
};

// answerWrong()
    // display condemnation
    // wait 3 seconds
    // if not last question
        // call nextQuestion(qCount)
    // else
        // call finish()
function answerWrong() {
    clearInterval(intervalID);
    $('#question').text("NOPE!");
    $('#response').empty();
    var img = $('<img>');
    img.attr('src', 'assets/images/bridgeWrong.gif');
    $('#response').append(img);
    qCount++;
    setTimeout(function() {
        nextQuestion(qCount);
    }, 3000);
};

// function finish()
    // clear mainContent
    // display results
    // display restart button

// CALLS
// -----------------------------
initialize()

$('#response').on('click', '.choice', function() {
    var answer = this.value;
    if (answer == questions[qCount].answer) {
        answerRight();
    }
    else {
        answerWrong();
    };
});

$('#start').on('click', function() {
    $('#start').attr('style', 'display:none');
    nextQuestion(qCount);
});