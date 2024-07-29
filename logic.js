window.addEventListener("load", (e) => {
    
window.addEventListener("click", onButtonClick);

});

const button = document.getElementsByTagName("button");

let players = [
    {
        name: "Filipe",
        wins: 0,
        hand: undefined,
    },
    {
        name: "Sandra",
        wins: 0,
        hand: undefined,
    },
]

let winner;

const options =[
    "Rock",
    "Paper",
    "Scissors"
]

const images = {
    "Rock":"assets/rock.png",
    "Paper":"assets/paper.png",
    "Scissors":"assets/scissors.png"
}

function onButtonClick() {
    game();
}

function game() {

    playHand();

    console.log(players[0].hand)
    console.log(players[1].hand)

    setImages();

    checkWinner();

    attributePoints();

    setScore();
}


function playHand() {

    players[0].hand = randomHand();
    players[1].hand = randomHand();
}

function randomHand() {
    
    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function setScore() {

    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");
    score1.textContent = "Score " + players[0].wins;
    score2.textContent = "Score " + players[1].wins;
}

function setImages() {

    let img1 = document.getElementById("player1");
    let img2 = document.getElementById("player2");
    img1.src = images[players[0].hand];
    img2.src = images[players[1].hand];
}

function checkWinner() {

    winner = players[0];

    if (players[0].hand === players[1].hand) {
        winner = "draw";
        return;
    } 

    switch (players[0].hand) {
        case options[0]:
            if (players[1].hand === options[1]) {
                winner = players[1];
            };
            break;

        case options[1]:
            if (players[1].hand === options[2]) {
                winner = players[1];
            };
            break;

        case options[2]:
            if (players[1].hand === options[0]) {
                winner = players[1];
            };
            break
    }
}

function attributePoints() {

    if (winner === "draw") {
        winner = players[0];
        return;
    }

    return winner === players[0] ? players[0].wins += 1 : players[1].wins += 1;
}