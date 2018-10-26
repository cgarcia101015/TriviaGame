


//Countdown Timer
function timer() {
var count = 60;
var timer = setInterval(function () {
    $("#cco").html(count)
    count--;
    if (count === 0) {
        clearInterval(timer);
        $("#cco").html("00");
        }

    }, 1000);
};



//Questions and answers Object
var questions = [
    {
        q0: "What is the name of Will Smith’s character in Independence Day?",
        answers1: ["Captain Steven Hiller", "Captain Ron", "Captain America"],
        correctAnswer1: 0,
    },

    {
        q1: "Rap was just becoming well known in the 90s. Which artist had the first number one rap single?",
        answers2: ["Marky Mark", "MC Hammer", "Vanills Ice"],
        correctAnswer2: 2,
    },

    {
        q2: "This fad of the '90s was like a purse carried on your waist.",
        answers3: ["Ruck Sack", "Fanny Pack", "Pocket Book"],
        correctAnswer3: 1,
    },

    {
        q3: "Which musical star was knighted by Queen Elizabeth II on February 24 1998?",
        answers4: ["Elton John", "Bono", "George Michael"],
        correctAnswer4: 0,
    },

    {
        q4: "The original run of which 'Star Trek' series ended in 1999?",
        answers5: ["The Next Generation", "Deep Space Nine", "Voyager"],
        correctAnswer5: 1,
    },
];

function loadTrivia() {
    for (i = 0; i <=4; i++) {

        $('#questions').append('<input type="radio" name="radio_name" />' + questions[0]);
        }
    };

$("#start").on("click", function () {
    timer();
    loadTrivia();

    

});

// $("#questions").append(q1[0]);
// $("#choices").append(q1[1]);
// // $("#choices").append(q1[2] + "     ");
// // $("#choices").append(q1[3] + "     ");

// var answer1 = [];
// answer1 = q1;

// for (i = 0; i <= 3; i++) {
//     answer1.push($('<div>', {i} ));
// };
// $("#choices").append();

