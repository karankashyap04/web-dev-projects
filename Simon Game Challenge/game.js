
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;


$(document).on("keydown", function() {
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
    }
})


function nextSequence() {
    console.log("Called ns");
    level++;
    var randomNumber = Math.floor(4 * Math.random());
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    flashButton(randomChosenColor);
    playSound(randomChosenColor);
    $("h1").text("Level " + level);
}

function flashButton(color) {
    var buttonToFlash = $("#" + color);
    buttonToFlash.fadeOut(100).fadeIn(100);
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(color) {
    var buttonToAnimate = $("#" + color);
    buttonToAnimate.addClass("pressed");
    setTimeout(function() {
        buttonToAnimate.removeClass("pressed");
    }, 100);
}


$(".btn").on("click", function() {
    console.log("Called");
    console.log(this);
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    } else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    gameStarted = false;
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}