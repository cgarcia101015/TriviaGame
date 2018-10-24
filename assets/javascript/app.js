(function count(cc) {
    document.getElementById("cco").innerHTML = cc;
    if (cc > 0)
        setTimeout(function() { count(--cc); }, 1000);
  })(60);