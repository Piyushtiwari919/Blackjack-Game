let arrCard = []
let sum = 0;
const startGame = document.getElementById('start-game')
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.querySelector('.card-el')
const cardBtn = document.querySelector('.card-btn')
const resetGame = document.querySelector('.reset-btn')
const playerEl = document.querySelector(".player-el")

let hasBlackJack = true;
let isAlive = false;
let message="";
let preventMc = false;

// let player = {
//     name:"Harry",
//     chips:145
// }
// playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum === 1){
        return 11
    }
    else if( randomNum >10){
        return 10
    }
    else{
        return randomNum
    }
}

startGame.addEventListener('click',function (){
    if(preventMc===false){
        isAlive = true;
        let firstCard = Math.floor(Math.random()*13)+1
        let secondCard = Math.floor(Math.random()*13)+1
        sum=firstCard+secondCard;
        arrCard=[firstCard,secondCard]
        renderGame();
    }
})
function renderGame(){
    
    sumEl.textContent = `Sum :${sum} `
    cardEl.textContent=`Cards :`
    for(let i=0;i<arrCard.length;i++){
        cardEl.textContent += ` ${arrCard[i]} `
    }
    if(sum <= 20){
        message="do you want to draw a new card?";
    }
    else if(sum === 21){
        message="Wohhoo! You've got blackjack"
        hasBlackJack=true;
    }
    else{
        message="You're out of the game"
        isAlive= false; 
    }
    messageEl.textContent=message;
    preventMc = true;

}

cardBtn.addEventListener('click',()=>{
    if(isAlive === true && sum != 21){
        let cardVar=getRandomCard();
        arrCard.push(cardVar)
        sum += cardVar
        renderGame();
    }
})

resetGame.addEventListener("click",()=>{
    sum=0;
    arrCard=[];
    isAlive=true;
    sumEl.textContent = `Sum :`
    hasBlackJack=false;
    cardEl.textContent=`Cards :`
    messageEl.textContent=`Want to play a round? Click Start Game`;
    preventMc=false;

})
