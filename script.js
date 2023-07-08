const CHOICES = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    rNum = Math.floor(Math.random() * 3);
    return CHOICES[rNum];
}

function play(pse, cse){
    ps = pse.toUpperCase();
    cs = cse.toUpperCase();

    if (ps == cs){
        return 0;
    }
    else if 
        ( (ps == "ROCK" && cs == "SCISSORS") ||
          (ps == "PAPER" && cs == "ROCK") ||
          (ps == "SCISSORS" && cs == "PAPER")  )
          {
        return 1;
    }
    else {
        return -1;
    }
    
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        ps = prompt("Your Choice");
        cs = getComputerChoice();
        result = play(ps, cs);
        if (result == 1){
            playerScore += 1;
        }
        else if (result == -1){
            computerScore += 1
        }
    }
   if (playerScore > computerScore){
    console.log("You won!")
   }
   else{
    console.log("Computer won :(")
   }
}

game()