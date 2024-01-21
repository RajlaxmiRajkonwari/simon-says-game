//welcome message
let userName= prompt("please enter your name");
let mge = "welcome "+userName+ " hope you are doing well , here is a quick guide for you 1. Click  any key in your keyboard to initiate Simon Says.   2. Remember and repeat the sequence of colored buttons as they light up.  3. Progress through levels by correctly replicating the ever-growing pattern.    ~ if you enter wrong color the game will quit, hope you understad and able to play well, ENJOY PLAYING IT ~ thank you !";
alert(mge);


//initialization
let gameSeq = [];
let userSeq = [];
let btnColor = ["green", "violet", "yellow", "pink"];
let gameStart = false;
let level = 0;
let h4 = document.querySelector("h4");
let btn = document.querySelector("button");


//starting of the game
document.addEventListener("keypress", function () {
    if (!gameStart) {
        console.log("game started");
        gameStart = true;
        levelUp();
    }
});


//for game flash
function gameFlash(btn) {
    btn.classList.add("Flash");
    setTimeout(function () {
        btn.classList.remove("Flash");
    }, 300);
}

//for level up
function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btnColor[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}


//check answer
function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h4.innerText = "Game Over!";
    }
}

function btnPress() {
    let btn = this;
    gameFlash(btn);

    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


//user flash
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);
}

let allBtns = document.querySelectorAll("button");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

//red background
function gameOverFlash() {
    document.body.style.backgroundColor = "red";
    setTimeout(function () {
        document.body.style.backgroundColor = ""; 
    }, 500); // Adjust the duration as needed
}


//game over function
function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h4.innerText = "Game Over!";
        gameOverFlash();
    }
}

