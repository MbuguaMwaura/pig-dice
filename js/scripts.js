var add = function (a, b) {
    return parseInt(a + b);
}

function addscore(accumulator, a) {
    return accumulator + a;
}

var playerone = [];
var playertwo = [];
var playeroneheld = [];

function myFunction(){
    var random = Math.floor((Math.random()*6)+1);
    var random2 = Math.floor((Math.random()*6)+1);
    result = add(random,random2);
    document.getElementById("demo").innerHTML = random ;
    document.getElementById("demo2").innerHTML = random2 ;
    document.getElementById("total").innerHTML = result;

    if ((random > 1)&&(random2 > 1 )){
      
      playerone.push(result);
      playeronescore = playerone.reduce(addscore);
     
      document.getElementById("p-one-score").innerHTML = playeronescore;
     
    }  else if ((random === 1)||(random2 === 1)){
      $("#p-two-btn").show();
      $("#p-one-btn").hide();
      $("#p-two").addClass("playertwoturn");
      $("#p-one").removeClass("playertwoturn");
      playerone = [0];
     
      document.getElementById("p-one-score").innerHTML = playeronescore;
    }
    
}