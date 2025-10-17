
for (i=0 ; i<10; i++) {
    let choice = Math.random()
    let action;

    if (choice < 1/3) {
        action = 'Rock'
    } else if (choice >= 1/3 && choice < 2/3) {
        action  = 'Paper'
    } else {
        action = 'Scissor'
    }


    userChoice = prompt("Chose rock paper or scissor")

    if (userChoice == action.toLowerCase()) {
        console.log(`Console chose ${action}, it's a tie.`)
    } else if (userChoice == 'rock' && action == 'Scissor') {
        console.log(`Machine picked ${action}. You win!`)
    } else if (userChoice == 'rock' && action == 'Paper') {
        console.log(`Machine picked ${action}. You loose.`)
    } else if (userChoice == 'paper' && action == 'Rock') {
        console.log(`Machine picked ${action}. You win!`)
    } else if (userChoice == 'paper' && action == 'Scissor') {
        console.log(`Machine picked ${action}. You loose.`)
    } else if (userChoice == 'scissor' && action == 'Paper') {
        console.log(`Machine picked ${action}. You win!`)
    } else if (userChoice == 'scissor' && action == 'Rock') {
        console.log(`Machine picked ${action}. You loose.`)
    } else {
        console.log('Idk man something is weird')
    }
}
