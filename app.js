/* Game Rules: 
The game has 2 players 
each player has a dice and can roll as many times as they wish on their turn 
the sum of the dice rolls in any given round is added to the overall total 
***but***
if the player rolls a 1 it becomes the other players turn and their round total is removed
the player can chose to hold and bank the round total if they do not wish to take more risk, 
after which it is the next players turn. 

First to reach 100 overall wins the game 
*/ 

var scores, roundScore, activePlayer, dice; 

/**@type {HTMLElement} */
var diceImg = document.querySelector('.dice');
diceImg.style.display = 'none' ; 


init() ; 

var roundScoreDom = document.querySelector('#current-' + activePlayer).textContent; 




//generates a random number between x and y. 
function randNum(x,y) {
    return Math.floor((Math.random() * y) + x);
}


document.getElementById('score-0').textContent = '0'; 
document.getElementById('score-1').textContent = '0'; 
document.getElementById('current-0').textContent = '0'; 
document.getElementById('current-1').textContent = '0'; 

document.querySelector('.btn-roll').addEventListener('click',btnRollDice) ; 
document.querySelector('.btn-hold').addEventListener('click', btnHold); 
document.querySelector('.btn-new').addEventListener('click', init); 


function btnRollDice(){
   
    var dice = randNum(1, 6); 
    console.log(dice); 
   
    diceImg.style.display = 'block' ;
    diceImg.src = 'dice-' + dice + '.png' ;
    
     
    if (dice !== 1){
       roundScore += dice; 
       document.querySelector('#current-' + activePlayer).textContent = roundScore;  
    }
    else {
        roundScore = 0;
        diceImg.style.display = 'none'; 
        if(activePlayer === 0) {
            document.getElementById('current-0').textContent = '0';  
            activePlayer = 1; 
            changeActiveDesign(); 
                 
          

        }
        else {
            document.getElementById('current-1').textContent = '0';  
            activePlayer = 0;
            changeActiveDesign()
            }
        
        
    }


}

function changeActiveDesign() {
    if (activePlayer === 0){
        document.querySelector('.player-1-panel').classList.remove('active'); 
        document.querySelector('.player-0-panel').classList.add('active');  

             
    }  
    else if (activePlayer === 1){
        document.querySelector('.player-0-panel').classList.remove('active'); 
        document.querySelector('.player-1-panel').classList.add('active');  
        
    } 

    diceImg.style.display = 'none'; 
     
     
}


function btnHold() {

    if (activePlayer === 0) {
        scores[0] += roundScore;
        roundScore = 0; 
        document.querySelector('#current-' + activePlayer).textContent = '0'; 
        document.querySelector('#score-' + activePlayer).textContent = scores[0]; 
        if (scores[0] >= 100) {
            document.querySelector('#name-0').textContent = 'WINNER!' ; 
            diceImg.style.display = 'none'; 
            document.querySelector('.player-0-panel').classList.add('winner'); 
            document.querySelector('.player-0-panel').classList.remove('active'); 
        } 
        else {
        activePlayer = 1;
        changeActiveDesign() ; 
        } 
    }
    else if(activePlayer === 1) {
        scores[1] += roundScore; 
        roundScore = 0;  
        document.querySelector('#current-' + activePlayer).textContent = '0'; 
        document.querySelector('#score-' + activePlayer).textContent = scores[1];  
        if (scores[1] >= 100) {
            document.querySelector('#name-1').textContent = 'WINNER!' ; 
            diceImg.style.display = 'none'
            document.querySelector('.player-1-panel').classList.add('winner'); 
            document.querySelector('.player-1-panel').classList.remove('active'); 
        }
        else {
        activePlayer = 0; 
        changeActiveDesign();  
        }
    }

}

function init(){
    scores= [0,0]; 
    roundScore = 0; 
    activePlayer =  0; 
    document.querySelector('#score-0').textContent = '0'; 
    document.querySelector('#score-1').textContent = '0'; 
    document.querySelector('#name-0').textContent = 'Player 1'; 
    document.querySelector('#name-1').textContent = 'Player 2'; 
    document.querySelector('#current-0').textContent = '0'; 
    document.querySelector('#current-1').textContent = '0'; 
    document.querySelector('.player-1-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active'); 
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active'); 
    diceImg.style.display = 'none'; 
    document.querySelector('.player-0-panel').classList.add('active');  

}

