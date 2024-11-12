function randomQutes() {
  var qoute = [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  ];
  var names = [
    "― Oscar Wilde",
    "― Marilyn Monroe",
    "― Frank Zappa",
    "― Albert Einstein",
  ];

 
  var num = Math.floor(Math.random() * qoute.length);

  document.getElementById("qoutes").innerHTML = qoute[num];
  document.getElementById("names").innerHTML = names[num];

}
