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
let debugging =getComputerChoice(3);
console.log(debugging);
function getHumanChoice(){
    let Choice = prompt("Please enter your choice: ").toLowerCase();
    if (Choice !== rock && Choice !== paper && Choice !== scissors){
        prompt("Enter Valid choice");
    }
}
getHumanChoice();


function gameLogic(humanScore, computerScore){
    if(getComputerChoice=0){
        getComputerChoice = rock;
    }else if(getComputerChoice=1){
        getComputerChoice = paper;
    }else if(getComputerChoice=2){
        getComputerChoice = scissors;
    }
    if(humanScore=computerScore){
        prompt("This Is A Draw");
    }else if(humanScore == rock && computerScore==scissors || humanScore==scissors && computerScore==paper ){
        console.log("playerScore++ ");
        let p = 1;
    }else if(computerScore == rock && humanScore==scissors || computerScore==scissors && humanScore==paper){
        console.log("computerScore++ ");
        let c =1;
    }
}
gameLogic(getComputerChoice, getHumanChoice);

function scoreline(){
    gameLogic()
    while()
};

