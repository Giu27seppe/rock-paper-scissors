
//User has to choose between 1 (Rock) , 2 (Paper) and 3 (Scissors)

function getHumanChoice (){
   let inputValue = parseInt(prompt("Enter 1 for Rock, 2 for Paper , 3 for Scissors"))
    console.log(inputValue)
    if (inputValue === 1 || inputValue === 2 || inputValue === 3) {
        if (inputValue === 1){
            console.log("You have chosen Rock")
            return "Rock"
        } else if (inputValue === 2){
            console.log("You have chosen Paper")
            return "Paper"
        } else if (inputValue == 3) {
            console.log("You have chosen Scissor")
            return "Scissors"
        }
    } else {
        console.log("You inserted an invalid value, please try again")
    }
}


// Randomly generates a rock, paper or scissors for the computer's move

function getComputerChoice (){
   let random = Math.floor(Math.random() * 3 );
   if (random === 0){
    console.log("Rock")
    return "Rock"
   } else if (random === 1){
    console.log("Paper")
    return "Paper"
   } else {
    console.log("Scissors")
    return "Scissors"
   }
}


//Playscore

let playerScore = 0,
    computerScore = 0,
    roundWinner = ""

// Play round logic

function playround(){
    let humanChoice = getHumanChoice(),
        computerChoice = getComputerChoice();

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper" )
    ) {
        playerScore++
        roundWinner = "Player"
    }
    else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper" )
    ) {
        computerScore++
        roundWinner = "Computer"
    } else {
        roundWinner = "Tie"
    }
    
    console.log(`The winner is ${roundWinner}`)

}


function playgame() {
    for (let i = 0; i < 5 ; i++){
    playround();
    console.log (`Player score is equal to ${playerScore}, Computer score is equal to ${computerScore}`)
    }

}

playgame()