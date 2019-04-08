var add = function (a, b) {
    return parseInt(a + b);
}

function addscore(accumulator, a) {
    return accumulator + a;
}

var playerone = [];
var playertwo = [];
var playeroneheld = [];
var playertwoheld = [];
var playertwoscore = 0;

$(document).click(function () {

    $(".game").removeClass("game");
    $(".instructions").hide();
});

function resetGame() {
    location.reload();
}

function myFunction() {
    var random = Math.floor((Math.random() * 6) + 1);
    var random2 = Math.floor((Math.random() * 6) + 1);
    result = add(random, random2);
    document.getElementById("demo").innerHTML = "DICE 1 : " + random;
    document.getElementById("demo2").innerHTML = "DICE 2 : " + random2;
    document.getElementById("total").innerHTML = "TOTAL : " + result;

    if ((random > 1) && (random2 > 1)) {

        playerone.push(result);
        playeronescore = playerone.reduce(addscore);


        document.getElementById("p-one-score").innerHTML = playeronescore;

    } else if ((random === 1) || (random2 === 1)) {
        $("#p-two-btn").show();
        $("#p-one-btn").hide();
        $("#p-two").addClass("playertwoturn");
        $("#p-one").removeClass("playertwoturn");
        $("#holdtwo").show();
        $("#holdone").hide();
        document.getElementById("p-one-score").innerHTML = 0;
    }

}

function myFunction2() {
    var random = Math.floor((Math.random() * 6) + 1);
    var random2 = Math.floor((Math.random() * 6) + 1);
    var result1 = add(random, random2);
    document.getElementById("demo3").innerHTML = "DICE 1 : " + random;
    document.getElementById("demo4").innerHTML = "DICE 2 : " + random2;
    document.getElementById("total2").innerHTML = "TOTAL : " + result1;

    if ((random > 1) && (random2 > 1)) {

        playertwo.push(result1);
        playertwoscore = playertwo.reduce(addscore);
        document.getElementById("p-two-score").innerHTML = playertwoscore;

    } else if ((random === 1) || (random2 === 1)) {

        $("#p-one-btn").show();
        $("#p-two-btn").hide();
        $("#p-one").addClass("playertwoturn");
        $("#p-two").removeClass("playertwoturn");
        $("#holdone").show();
        $("#holdtwo").hide();
        document.getElementById("p-two-score").innerHTML = 0;
    }
}

$(document).ready(function () {
    document.getElementById("holdone").addEventListener("click", function () {
        playeroneheld.push(playeronescore);
        var final = playeroneheld.reduce(addscore);
        document.getElementById("p-one-held").innerHTML = final;
        $("#holdone").hide();
        $("#p-two-btn").show();
        $("#p-one-btn").hide();
        $("#p-two").addClass("playertwoturn");
        $("#p-one").removeClass("playertwoturn");
        $("#holdtwo").show();
        document.getElementById("p-one-score").innerHTML = 0;
        playerone = [];
        playeronescore = 0;
        if (final >= 100) {
            document.getElementById("p-one-score").innerHTML = "WINNER!!";
        }
    });
});
$(document).ready(function () {
    document.getElementById("holdtwo").addEventListener("click", function () {
        playertwoheld.push(playertwoscore);
        var final = playertwoheld.reduce(addscore);
        document.getElementById("p-two-held").innerHTML = final;
        $("#holdtwo").hide();
        $("#p-one-btn").show();
        $("#p-two-btn").hide();
        $("#p-one").addClass("playertwoturn");
        $("#p-two").removeClass("playertwoturn");
        $("#holdone").show();
        document.getElementById("p-two-score").innerHTML = 0;
        playertwo = [];
        playertwoscore = 0;
        if (final >= 100) {
            document.getElementById("p-two-score").innerHTML = "WINNER!!";
        }

    });
});