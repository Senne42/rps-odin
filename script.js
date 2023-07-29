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

function play(){
    let user = playerChoice()
    let machine = getComputerChoice()

    console.log(user)
    console.log(machine)
    // switch ()
    if (user === machine) {
        console.log("Drawn, you both picked: " + user)
        return "drawn"
    }
    else {
        switch (user) {
            case "ROCK": 
                switch (machine) {
                    case "PAPER":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        break;
                    case "SCISSOR":
                        console.log("You win! " + user + " beats " + machine + "!")
                        return "user"
                        break;
                }
            break;
            
            case "PAPER": 
                switch (machine) {
                    case "SCISSOR":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        break;
                    case "ROCK":
                        console.log("You win! " + user + " beats " + machine + "!")
                        return "user"
                        break;
                }
            break;
            
            case "SCISSOR": 
                switch (machine) {
                    case "ROCK":
                        console.log("You lose! " + machine + " beats " + user + "!")
                        break;
                    case "PAPER":
                        console.log("You win! " + user + " beats " + machine + "!")
                        return "user"
                        break;
                }
            break;

        }
    }
}

function startGame () {
    let rounds = prompt("How many rounds you wanna play: ")
    let machineScore = 0
    let userScore = 0
    for (let a=1; a <= rounds; a++) {
        let result = play()
        if (result === "user" && result != "drawn"){
            userScore++
        }
        else if (result === "drawn"){
            console.log("DRAWN")
         }
        else{
            machineScore++
        }
    }


    if (userScore > machineScore){
        console.log("Cheers mate! You win!")
    }
    else if (userScore === machineScore){
        console.log("DRAWN!")
    }
    else {console.log("Sorry mate, you are lame!")}
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
