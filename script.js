// This Is The GRAVEYARD OF Code
// if(getComputerChoice=0){
    //     console.log("Rock");
    // }else if(getComputerChoice=1){
    //     console.log("Paper");
    // }else if(getComputerChoice=2){
    //     console.log("Scissors");
    // }
    
// let humanScore=0;
// let computerScore=0;

// function playRound(humanChoice, computerChoice){
//     humanChoice.toLowerCase();
//     humanChoice(getHumanChoice);
//     computerChoice(getComputerChoice);
// }
// }

// I dont know the f Im doing either I will have to change the human choices into integer values
//  that I can select and 
// comparewith the computer numbers 
// however I need to make a tracking feature for the game counting how many rounds have been played as well as 
// score tracking the scores to the game
// function scoreline(){
//     gameLogic()
//     while()
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// // playRound(humanSelection, computerSelection);

// function getComputerChoice(max){

//     return Math.floor(Math.random() * max);
// }
// let debugging =getComputerChoice(3);
//     if(getComputerChoice=0){
//         getComputerChoice = rock;
//     }else if(getComputerChoice=1){
//         getComputerChoice = paper;
//     }else if(getComputerChoice=2){
//         getComputerChoice = scissors;
//     }
// console.log(debugging);

let playerScore = 0;
let computersScore = 0;
let Draws = 0;
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };



function getHumanChoice(){
    let Choice = prompt("Please enter your choice: ").toLowerCase();
    while (Choice !== "rock" && Choice !== "paper" && Choice !== "scissors"){
        Choice = prompt("Enter Valid choice");
    };
    return Choice;
};

function gameLogic(humanScore, computerScore){

    if(humanScore === computerScore){
        Draws++;
        alert("This Is A Draw");

    }else if(
        (humanScore == "rock") && (computerScore == "scissors") || 
        (humanScore == "paper") && (computerScore == "rock") ||
        (humanScore == "scissors") && (computerScore == "paper")){
            playerScore ++;
        console.log("playerScore++ ",playerScore);

         alert( "You win! " +humanScore+ " beats " +computerScore+".");

    }else {
        computersScore ++;
        console.log("computerScore++ ", computersScore);
        alert( "Computer wins! " +computerScore+ " beats " +humanScore+".");

   }
 };



 function gameRound(times){
    for(let i = 1; i <= times; i++){
        
        const computerScore = getComputerChoice().trim();
        let debug= console.log(computerScore);
        const humanScore = getHumanChoice();
        gameLogic(humanScore, computerScore);
    }
    alert("ScoreLine==>     PLAYER:  "+playerScore+  "    COMPUTER:  " + computersScore+ "    DRAW:    " +Draws);
 };
 gameRound(5);