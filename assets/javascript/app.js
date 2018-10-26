// (function count(cc) {
//     document.getElementById("cco").innerHTML = cc;
//     if (cc > 0)
//         setTimeout(function() { count(--cc); }, 1000);
//   })(60);

  var count = 60;
  var timer = setInterval(function() {
      $("#cco").html(count)
      count--;
      if(count === 0) {
          clearInterval (timer);
          $("#cco").html("00");
      }
      
  },1000 );