function startTimer(duration, display) {
    var timer = duration,  seconds;
    setInterval(function () {
        
        seconds = parseInt(timer % 60, 10);

        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text( seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});