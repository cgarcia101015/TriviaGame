

var count = 60;
var timer = setInterval(function () {
    $("#cco").html(count)
    count--;
    if (count === 0) {
        clearInterval(timer);
        $("#cco").html("00");
    }

}, 1000);


var q1 = ["What is the name of Will Smith’s character in Independence Day?", "Captain Steven Hiller", "Captain Ron", "Captain America"];

$("#questions").append(q1[0]);
$("#choices").append(q1[1]);
// $("#choices").append(q1[2] + "     ");
// $("#choices").append(q1[3] + "     ");

var answer1 = [];
answer1 = q1;

for (i = 0; i <= 3; i++) {
    answer1.push($('<div>', {i} ));
};
$("#choices").append();

