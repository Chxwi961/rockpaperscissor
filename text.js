const buttons = document.querySelectorAll("button")
const display = document.querySelector(".score")
const displayComputer = document.querySelector(".computer")
let playerChoice;
let computerChoiced; 


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


buttons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        display.textContent = "You picked: " + e.target.className
        playerChoice = e.target.className

        computerChoiced = getComputerChoice() 
        displayComputer.textContent = "Machine picked: " + computerChoiced



    })
})


