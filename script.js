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

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const computerScore = getComputerChoice().trim();
  let debug= console.log(computerScore);


function getHumanChoice(){
    let Choice = prompt("Please enter your choice: ").toLowerCase();
    while (Choice !== "rock" && Choice !== "paper" && Choice !== "scissors"){
        Choice = prompt("Enter Valid choice");
    };
    return Choice;
};


// getHumanChoice();

function gameLogic(humanScore, computerScore){

    if(humanScore === computerScore){

        alert("This Is A Draw");

    }else if(
        (humanScore == "rock") && (computerScore == "scissors") || 
        (humanScore == "paper") && (computerScore == "rock") ||
        (humanScore == "scissors") && (computerScore == "paper")){

        console.log("playerScore++ ");

        // return `You win! ${humanScore} beats ${computerScore}.`;

    }else {

        console.log("computerScore++ ");

   }
// }

// I dont know the f Im doing either I will have to change the human choices into integer values
//  that I can select and 
// comparewith the computer numbers 
// however I need to make a tracking feature for the game counting how many rounds have been played as well as 
// score tracking the scores to the game
// function scoreline(){
//     gameLogic()
//     while()
 };
 const humanScore = getHumanChoice();
 gameLogic(humanScore, computerScore);