
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
var response = {
    q0:null,
    q1:null,
    q2:null,
    q3:null,
    q4:null
};




        $('#questions').append('<form id=q0>' + questions[0].q0 + '<br>');
        $('#q0').append('<input type="radio" name="radio_name0" id="q00" value="0"/>' + questions[0].answers0[0]+"  ");
        $('#q0').append('<input type="radio" name="radio_name0" id="q01" value="1"/>' + questions[0].answers0[1]+"  ");
        $('#q0').append('<input type="radio" name="radio_name0" id="q02" value="2"/>' + questions[0].answers0[2] + '<br>'+'<br>');
       
    
    $('#q0 input').on("change", function () {
       response.q0 = parseInt($('input:checked', '#q0').val());
       console.log(response)
    });

       
        $('#questions').append('<form id=q1>' + questions[1].q1 + '<br>');
        $('#q1').append('<input type="radio" name="radio_name1" id="q10" value="0"/>' + questions[1].answers1[0]+"  ");
        $('#q1').append('<input type="radio" name="radio_name1" id="q11" value="1"/>'  + questions[1].answers1[1]+"  ");
        $('#q1').append('<input type="radio" name="radio_name1" id="q12" value="2"/>' + questions[1].answers1[2] + '<br>'+'<br>');
        
        $('#q1 input').on("change", function () {
            response.q1 = parseInt($('input:checked', '#q1').val());
            console.log(response)
        });

        $('#questions').append('<form id=q2>' + questions[2].q2 + '<br>');
        $('#q2').append('<input type="radio" name="radio_name2" id="q20" value="0"/>' + questions[2].answers2[0]+"  ");
        $('#q2').append('<input type="radio" name="radio_name2" id="q21" value="1"/>' + questions[2].answers2[1]+"  ");
        $('#q2').append('<input type="radio" name="radio_name2" id="q22" value="2"/>' + questions[2].answers2[2] + '<br>'+'<br>');
       
        $('#q2 input').on("change", function () {
            response.q2 = parseInt($('input:checked', '#q2').val());
            console.log(response)
        });


        $('#questions').append('<form id=q3>' + questions[3].q3 + '<br>');
        $('#q3').append('<input type="radio" name="radio_name3" id="q30" value="0"/>' + questions[3].answers3[0]+"  ");
        $('#q3').append('<input type="radio" name="radio_name3" id="q31" value="1"/>' + questions[3].answers3[1]+"  ");
        $('#q3').append('<input type="radio" name="radio_name3" id="q32" value="2"/>' + questions[3].answers3[2] + '<br>'+'<br>');
        
        $('#q3 input').on("change", function () {
            response.q3 = parseInt($('input:checked', '#q3').val());
            console.log(response)
        });


        $('#questions').append('<form id=q4>' + questions[4].q4 + '<br>');
        $('#q4').append('<input type="radio" name="radio_name4" id="q40" value="0"/>' + questions[4].answers4[0]+"  ");
        $('#q4').append('<input type="radio" name="radio_name4" id="q41" value="1"/>' + questions[4].answers4[1]+"  ");
        $('#q4').append('<input type="radio" name="radio_name4" id="q42" value="2"/>' + questions[4].answers4[2] + '<br>'+'<br>');
       
        $('#q4 input').on("change", function () {
            response.q4 = parseInt($('input:checked', '#q4').val());
            console.log(response)
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
