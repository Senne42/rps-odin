const userScore = document.getElementById('userScore');
const machineScore = document.getElementById('machineScore');
const round = document.getElementById('round');
let uScore = 0
let mScore = 0 
let gameStatus = true


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
        userScore.style.color = 'green'
        machineScore.style.color = 'red'
        gameStatus = false
    }
    else if (mScore === 5) {
        
        alert("YOU LOSE")
        userScore.style.color = 'red'
        machineScore.style.color = 'green'
        gameStatus = false
    }
}

function updateRound (winner) {
    if (winner === 'user'){
        round.innerText = 'YOU WIN THIS ROUND!'
        round.style.color = 'green'
    }
    else if (winner === 'machine') {
        round.innerText = 'YOU LOSE THIS ROUND!'
        round.style.color = 'red'
    }
    else {
        round.innerText = 'DRAW'
        round.removeAttribute('style')
    }
}

function resetScore () {
    uScore = 0
    mScore = 0
    userScore.innerText = uScore
    machineScore.innerText = mScore
    gameStatus = true
    userScore.removeAttribute('style')
    machineScore.removeAttribute('style')
    round.innerText = ""
}

function play(e){
if (gameStatus) {    
    let user = e.target.innerText;
    let machine = getComputerChoice()


    console.log(user)
    console.log(machine)
    // switch ()
    if (user === machine) {
        console.log("Draw, you both picked: " + user)
        console.log("DRAW!")
        updateRound()
    }
    else {
        switch (user) {
            case "ROCK": 
                switch (machine) {
                    case "PAPER":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        updateScores("machine")
                        updateRound("machine")
                        break;
                    case "SCISSOR":
                        console.log("You win! " + user + " beats " + machine + "!")
                        updateScores("user")
                        updateRound("user")
                        break;
                }
            break;
            
            case "PAPER": 
                switch (machine) {
                    case "SCISSOR":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        updateScores("machine")
                        updateRound("machine")
                        break;
                    case "ROCK":
                        console.log("You win! " + user + " beats " + machine + "!")
                        updateScores("user")
                        updateRound("user")
                        break;
                }
            break;
            
            case "SCISSOR": 
                switch (machine) {
                    case "ROCK":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        updateScores("machine")
                        updateRound("machine")
                        break;
                    case "PAPER":
                        console.log("You win! " + user + " beats " + machine + "!")
                        updateScores("user")
                        updateRounds("user")
                        break;
                }
            break;

        }
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
