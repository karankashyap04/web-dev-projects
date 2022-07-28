var randomNumber1 = 1 + Math.floor(6 * Math.random());
var randomNumber2 = 1 + Math.floor(6 * Math.random());

document.querySelector(".dice1-img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice2-img").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
    var resultText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    var resultText = "🚩 Player 1 Wins!";
} else {
    var resultText = "Player 2 Wins! 🚩";
}

document.querySelector("h1").textContent = resultText;