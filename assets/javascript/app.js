// GLOBAL VARIABLES
// -----------------------------
var numCorrect = 0;
var numIncorrect = 0;
var intervalID;
var count = 30;
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

var gifs = [
    {
        right: 'assets/images/camelotDance.gif',
        wrong: 'assets/images/bridgeWrong.gif'
    },
    {
        right: 'assets/images/camelotDance.gif',
        wrong: 'assets/images/insultingFrenchman.gif'
    },
    {
        right: 'assets/images/prisonerClapping.gif',
        wrong: 'assets/images/youMakeMeSad.gif'
    },
    {
        right: 'assets/images/comePatsy.gif',
        wrong: 'assets/images/holyGrailRabbit.gif'
    },
    {
        right: 'assets/images/bridgeRight.gif',
        wrong: 'assets/images/bridgeWrong.gif'
    }
];

// FUNCTIONS
// -----------------------------
function initialize() {
    $('#timer').empty();
    $('#question').empty();
    $('#response').empty();
    $('#start').attr('style', 'display:initial');
};

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

function answerRight() {
    clearInterval(intervalID);
    $('#question').text("CORRECT!");
    $('#response').empty();
    var img = $('<img>');
    img.attr({'src':gifs[qCount].right, 'height':'250px'});
    $('#response').append(img);
    numCorrect++;
    qCount++;
    if (qCount < questions.length) {
        setTimeout(function() {
            nextQuestion(qCount);
        }, 4000);
    }
    else {
        setTimeout(function() {
            finish();
        }, 4000);
    };
};

function answerWrong() {
    clearInterval(intervalID);
    $('#question').text("NOPE! the correct answer is: " + questions[qCount].choices[questions[qCount].answer]);
    $('#response').empty();
    var img = $('<img>');
    img.attr({'src':gifs[qCount].wrong, 'height':'250px'});
    $('#response').append(img);
    numIncorrect++;
    qCount++;
    if (qCount < questions.length) {
        setTimeout(function() {
            nextQuestion(qCount);
        }, 4000);
    }
    else {
        setTimeout(function() {
            finish();
        }, 4000);
    };
};

function finish() {
    clearInterval(intervalID);
    $('#timer').empty();
    $('#question').text('RESULTS:');
    $('#response').html('Correct: ' + numCorrect + '<br>' + 'Incorrect: ' + numIncorrect + '<br><br>' + 'Would you like to try again?');
    $('#start').attr('style', 'display:initial');
};

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
    numCorrect = 0;
    numIncorrect = 0;
    clearInterval(intervalID);
    count = 30;
    qCount = 0;
    nextQuestion(qCount);
});