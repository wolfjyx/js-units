for(var i = 1; i <= 5; i++) {
  !function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }(i);
}

for(let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

for(var i = 1; i <= 5; i++) {
  setTimeout(console.log.bind(console, i), i * 1000);
}

for (var i = 1; i <= 5; i++) {
  setTimeout(function(num) {
    console.log(num)
  }, i * 1000, i);
}

