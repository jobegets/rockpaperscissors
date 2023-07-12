const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice(){
    rNum = Math.floor(Math.random() * 3);
    return CHOICES[rNum];
}

function play(pse){
    ps = pse.toUpperCase();
// ensures there is no tie
    while(true){
        cs = getComputerChoice();
        if (cs!= ps){
            break;
        }
    }
    cs = cs.toUpperCase();
    if 
        ( (ps == "ROCK" && cs == "SCISSORS") ||
          (ps == "PAPER" && cs == "ROCK") ||
          (ps == "SCISSORS" && cs == "PAPER")  )
          {
        return [1, ps, cs];
    }
    else {
        return [-1, ps, cs];
    }
    
}

function icons(ps,cs){
    pse = '';
    cse = '';
    if (ps == "ROCK"){
        pse =  '🪨';
    }
    else if (ps == "PAPER"){
        pse = '📄';
    }
    else{
        pse =  '✂️';
    }
    if (cs == "ROCK"){
        cse =  '🪨';
    }
    else if (cs == "PAPER"){
        cse = '📄';
    }
    else{
        cse=  '✂️';
    }
    return [pse, cse];
}

let playerScore = 0;
let computerScore = 0;
let done = false;

const results = document.querySelector('#results');
const pscore = document.createElement('div');
const cscore = document.createElement('div');
const pDisplay = document.querySelector('#player');
const cDisplay = document.querySelector('#comp');
results.style.cssText = 'display:flex; justify-content: center; gap: 100px';
function game(ps){
    
    cs = getComputerChoice();
    result = play(ps);
    icon = icons(result[1], result[2])
    if (done == false){
        if (result[0] == 1){
            playerScore += 1;
            console.log(result);
        }
        else{
            computerScore += 1
            console.log(result);
        }
        pscore.textContent = playerScore
        cscore.textContent = computerScore
        pscore.style.cssText = 'font-size: 50px';
        cscore.style.cssText = 'font-size: 50px';
        
        results.appendChild(pscore);
        results.appendChild(cscore);

        pDisplay.textContent = icon[0];
        cDisplay.textContent = icon[1];
        const winner = document.querySelector("#winner")
        
        if(playerScore == 5){
            const win = document.createElement('h1');
            win.textContent = 'You Win!';
            win.style.color = 'black';
            winner.appendChild(win);
            done = true;
            again();
        }
        else if(computerScore == 5){
            const win2 = document.createElement('h1');
            win2.textContent = 'Computer Wins!';
            winner.appendChild(win2);
            done = true;
            again();
        }
    }
    }

//    if (playerScore > computerScore){
//     console.log("You won!")  
//    }
//    else{
//     console.log("Computer won :(")
//    }


document.querySelector('#rock').addEventListener("click", function(){
    game('rock');
});
document.querySelector('#paper').addEventListener('click',function(){
    game('paper');
})
document.querySelector('#scissors').addEventListener('click',function(){
    game('scissors');
})

function again(){
    let ag = document.querySelector("#again");
    let but = document.createElement("button")
    but.textContent = 'Try Again'
   
    but.addEventListener('click', function(){
        location.reload();
    })
    ag.style.cssText = "display: flex; justify-content: center";
    ag.appendChild(but);
}