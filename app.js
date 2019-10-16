

let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;
let dice = 0;
let gamePlaying = true;

let diceRoll = 0;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;


document.querySelector('#current-' + activePlayer).textContent = dice;



function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    dice = 0;
    gamePlaying = true;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = "player 1";
    document.querySelector('#name-1').textContent = "player 2";

}





function nextPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = 0;


    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}




document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

        
        let dice = Math.floor(Math.random() * 6) + 1;
        
        
        let diceShow = document.querySelector('.dice');
        diceShow.style.display = 'block';
        diceShow.src = 'dice-' + dice + '.png';

        if(diceRoll === 6 && dice === 6){

                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = 0;
                nextPlayer();
        }
        else if( dice !== 1){
                
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;


        } else {

                nextPlayer();

        }

        diceRoll = dice;
    }

});




document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){


        scores[activePlayer] += roundScore;


        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        document.querySelector('#current-' + activePlayer).textContent = 0;

        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = "winner";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        } else {

            nextPlayer();
        } 
    }   

});




document.querySelector('.btn-new').addEventListener('click', init);


