var score, roundScore, activePlayer, gameplaying, doubleSix, WinningScore, dice, diceTwo, inpt;
var diceDom = document.querySelector('.dice-one');
var diceDomtwo = document.querySelector('.dice-two');
intit();
document.querySelector('.btn--roll').addEventListener('click', function(){
    if (gameplaying){
        dice = Math.floor (Math.random() * 6) +1;
         diceTwo = Math.floor (Math.random() * 6) +1;
        //display result
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        diceDomtwo.style.display = 'block';
        diceDomtwo.src = 'dice-' + diceTwo + '.png';
        //if condition checks if number is greater then 1
     if ( dice !== 1 && diceTwo !== 1)
        { 
            roundScore = roundScore + (dice + diceTwo); 
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        }
        else{
            nextplayer();
        }
        console.log(dice, diceTwo)
    }}
);
document.querySelector('.btn--hold').addEventListener('click', function() {
    if (gameplaying)
    {
//add score in variable
score[activePlayer] += roundScore;
//update score on ui
document.querySelector('#score--' + activePlayer).textContent= score[activePlayer];
var inpt = document.getElementById("winningScore").value;
if (inpt) {
    WinningScore = inpt;  
}
else{
    WinningScore = 100;
}
console.log(WinningScore);
//checks if player won the game
if (score[activePlayer]>= WinningScore) {
    document.querySelector('#name--' + activePlayer).textContent= 'Winner'; 
    diceDom.style.display = 'none';
    diceDomtwo.style.display = 'none';
    gameplaying = false;
}
    else
    {
        nextplayer();
    }
    }
});
document.querySelector('.btn--new').addEventListener('click', intit);
function intit(){
    gameplaying = true;
    score = [0,0];
    activePlayer = 0;
    roundScore = 0;
    diceDom.style.display = 'none';
    diceDomtwo.style.display = 'none';
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.querySelector('#name--1').textContent= 'Player 1'; 
    document.querySelector('#name--0').textContent= 'Player 0'; }
function nextplayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current--0').textContent=0;
    document.querySelector('#current--1').textContent=0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    diceDom.style.display = "none";
    diceDomtwo.style.display = 'none';
}
