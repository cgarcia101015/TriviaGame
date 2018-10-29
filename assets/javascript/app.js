
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

//Game score
var score = 0;
var loss = 0;

//Questions and answers Object
var questions = [
    {
        q0: "What is the name of Will Smith’s character in Independence Day?",
        answers0: ["Captain Steven Hiller", "Captain Ron", "Captain America"],
        correctAnswer1: 0,
    },

    {
        q1: "Rap was just becoming well known in the 90s. Which artist had the first number one rap single?",
        answers1: ["Marky Mark", "MC Hammer", "Vanilla Ice"],
        correctAnswer1: 2,
    },

    {
        q2: "This fad of the '90s was like a purse carried on your waist.",
        answers2: ["Ruck Sack", "Fanny Pack", "Pocket Book"],
        correctAnswer2: 1,
    },

    {
        q3: "Which musical star was knighted by Queen Elizabeth II on February 24 1998?",
        answers3: ["Elton John", "Bono", "George Michael"],
        correctAnswer3: 0,
    },

    {
        q4: "The original run of which 'Star Trek' series ended in 1999?",
        answers4: ["The Next Generation", "Deep Space Nine", "Voyager"],
        correctAnswer4: 1,
    },
];

// function loadTrivia() {
//     for (i = 0; i <=5; i++) {

    //Loading questions to page
        $('#questions').append(questions[0].q0 + '<br>');
        $('#questions').append('<input type="radio" name="radio_name" id="q00" />' + questions[0].answers0[0]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q01" />' + questions[0].answers0[1]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q02" />' + questions[0].answers0[2] + '<br>'+'<br>');
       
    //    $("#q00").click(function() {
    //        $(this).data('clicked', true);
    //    });

    //    if($("#q00").data('clicked')) {
    //        score++;
    //        console.log(score);
    //    };


        $("#q00").on("click", function () {
            score++;
            console.log(score);
            if ($("#q01" || "#q02").data('clicked', true)) {
                loss++;
                console.log(loss);
            }
        });
        $('#questions').append(questions[1].q1 + '<br>');
        $('#questions').append('<input type="radio" name="radio_name" id="q10" />' + questions[1].answers1[0]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q11" />'  + questions[1].answers1[1]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q12" />' + questions[1].answers1[2] + '<br>'+'<br>');
        
        $("#q12").on("click", function () {
            score++;
            console.log(score);

        });
        $('#questions').append(questions[2].q2 + '<br>');
        $('#questions').append('<input type="radio" name="radio_name" id="q20" />' + questions[2].answers2[0]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q21" />' + questions[2].answers2[1]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q22" />' + questions[2].answers2[2] + '<br>'+'<br>');
       
        $("#q21").on("click", function () {
            score++;
            console.log(score);

        });
        $('#questions').append(questions[3].q3 + '<br>');
        $('#questions').append('<input type="radio" name="radio_name" id="q30" />' + questions[3].answers3[0]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q31" />' + questions[3].answers3[1]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q32" />' + questions[3].answers3[2] + '<br>'+'<br>');
        
        $("#q30").on("click", function () {
            score++;
            console.log(score);

        });
        $('#questions').append(questions[4].q4 + '<br>');
        $('#questions').append('<input type="radio" name="radio_name" id="q40" />' + questions[4].answers4[0]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q41" />' + questions[4].answers4[1]+"  ");
        $('#questions').append('<input type="radio" name="radio_name" id="q42" />' + questions[4].answers4[2] + '<br>'+'<br>');
       
        $("#q41").on("click", function () {
            score++;
            console.log(score);
            alert("You got " + score + " questions correct!");
            
      
            
        });
    

    //     }
    // };

$("#start").on("click", function () {
    timer();
    // loadTrivia();

    

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
