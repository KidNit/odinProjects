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

let rock="rock";
let paper="paper";
let scissors="scissors";
function getComputerChoice(max){

    return Math.floor(Math.random() * max);
}
getComputerChoice(3);

function getHumanChoice(){
    let Choice = prompt("Please enter your choice: ").toLowerCase();
    if (Choice !== rock && Choice !== paper && Choice !== scissors){
        prompt("Enter Valid choice");
    }
}
getHumanChoice();


function gameLogic(humanScore, computerScore){
    if(getComputerChoice=0){
        // console.log("Rock");
        getComputerChoice = rock;
    }else if(getComputerChoice=1){
        // console.log("Paper");
        getComputerChoice = paper;
    }else if(getComputerChoice=2){
        // console.log("Scissors");
        getComputerChoice = scissors;
    }
    if(humanScore=computerScore){
        prompt("This Is A Draw");
    }else if(humanScore>computerScore){
        console.log(computerScore);
    }
}
gameLogic(getComputerChoice, getHumanChoice);


