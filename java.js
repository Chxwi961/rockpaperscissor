function getHumanChoice() {
    let choice = prompt('Choose between Rock, Paper, Scissor.')
    return choice.toLowerCase()
}

function getComputerChoice() {
    let rand = Math.random() /* Generates from 0 to 1 */
    let computerChoice
    if (rand < 1/3) { /* 33% chance */
        computerChoice = 'rock'
    } else if (rand >= 1/3 && rand < 2/3) { /* 33% chance */
        computerChoice = 'paper'
    } else {    /* still 33% chance */
        computerChoice = 'scissor'
    }
    return computerChoice
}
function pRound() {
    human = getHumanChoice() 
    computer = getComputerChoice() 
    console.log(computer)
    if (human == 'scissor' && computer == 'paper') {
        return "human"
    } else if (human == 'scissor' && computer == 'rock') {
        return "computer" 
    } else if (human == 'paper' && computer == 'rock') {
        return "human" 
    } else if (human == 'paper' && computer == 'scissor') {
        return "computer" 
    } else if (human == 'rock' && computer == 'scissor') {
        return "human" 
    } else if (human == 'rock' && computer == 'paper') {
        return "computer"
    } else {
        return 0 
    }
}

function score() {
    result = pRound()
    if (result == "human" ) {
        humanScore += 1 
    } else if (result == "computer") {
        computerScore += 1 
    } else {
        console.log("It's a tie!")
    }

    console.log(`Current score: \nHUMAN:${humanScore}\nCOMPUTER:${computerScore}`)
}


let humanScore = 0
let computerScore = 0 

score(humanScore, computerScore)
score(humanScore, computerScore)
score(humanScore, computerScore)
score(humanScore, computerScore)
score(humanScore, computerScore)

if (humanScore > computerScore) {
    console.log('Human wins!')
} else if (humanScore < computerScore) {
    console.log('Computer wins.')
} else {
    console.log('Its a tie.')
}