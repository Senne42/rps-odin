const userScore = document.getElementById('userScore');
const machineScore = document.getElementById('machineScore');
let uScore = 0
let mScore = 0 


document.addEventListener("DOMContentLoaded", function(){

    const rock = document.getElementById('buttonRock')    
    rock.onclick = function(e){play(e)}
    
    const paper = document.getElementById('buttonPaper')    
    paper.onclick = function(e){play(e)}
    
    const scissor = document.getElementById('buttonScissor')    
    scissor.onclick = function(e){play(e)}

});


function random (num = 3) {
    return Math.floor(Math.random() * num)
}

function getComputerChoice () {
    let choices = ["ROCK", "PAPER", "SCISSOR"]
    return choices[random(3)]
}

function playerChoice () {
    let userChoice = prompt("Pick 'rock', 'paper' or 'scissor'")
    let user = userChoice.toLocaleUpperCase()
    return user
}

function updateScores (winner) {
    if (winner === "user"){
        uScore++
        userScore.innerText = uScore
    }
    else {
        mScore++
        machineScore.innerText = mScore
    }

    if (uScore === 5) {
        alert("YOU WIN")
        resetScore()
    }
    else if (mScore === 5) {
        alert("YOU LOSE")
        resetScore()
    }
}

function resetScore () {
    uScore = 0
    mScore = 0
    userScore.innerText = uScore
    machineScore.innerText = mScore

}

function play(e){
    let user = e.target.innerText;
    let machine = getComputerChoice()


    console.log(user)
    console.log(machine)
    // switch ()
    if (user === machine) {
        console.log("Drawn, you both picked: " + user)
        console.log("DRAWN!")
    }
    else {
        switch (user) {
            case "ROCK": 
                switch (machine) {
                    case "PAPER":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        updateScores("machine")
                        break;
                    case "SCISSOR":
                        console.log("You win! " + user + " beats " + machine + "!")
                        updateScores("user")
                        break;
                }
            break;
            
            case "PAPER": 
                switch (machine) {
                    case "SCISSOR":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        updateScores("machine")
                        break;
                    case "ROCK":
                        console.log("You win! " + user + " beats " + machine + "!")
                        updateScores("user")
                        break;
                }
            break;
            
            case "SCISSOR": 
                switch (machine) {
                    case "ROCK":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        updateScores("machine")
                        break;
                    case "PAPER":
                        console.log("You win! " + user + " beats " + machine + "!")
                        updateScores("user")
                        break;
                }
            break;

        }
    }
}


/* 
Computer has to pick between "rock", "paper" or "scissor"
    - Create list of possibilities 
    - Logic to pick only one
User has to pick between "rock", "paper" or "scissor"
Set user choice to uppercase
Compare user and computer choice
    - rock beats scissor
    - rock loses to paper
    - scissors beat paper

show the results
*/
