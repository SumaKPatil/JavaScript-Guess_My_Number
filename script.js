'use strict';

// let msg=document.querySelector('.message');
// console.log(msg.textContent);

// msg.textContent="Correct Number!";

// console.log(msg.textContent);

// let num=document.querySelector('.number');
// num.textContent=13;
// console.log(num.textContent);


// let scr=document.querySelector('.score');
// scr.textContent=10;
// console.log(scr.textContent);

// let guess=document.querySelector('.guess');
// guess.value=23;
// console.log(guess.value);

let btn=document.querySelector('.check');

let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highestScore=0;
console.log(number);

const displayMsg=function(msg){
    document.querySelector('.message').textContent=msg;

}

btn.addEventListener('click',()=>{
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        displayMsg("No number");
    }

    else if(guess===number){
        displayMsg("Correct Number!!!");
        document.querySelector('.number').textContent=number;
        if(score>highestScore){
            highestScore=score;
            document.querySelector('.highscore').textContent=highestScore;
        }
       document.querySelector('body').style.backgroundColor="green";
       document.querySelector('.number').style.width="30rem";
    }
    else if(guess!==number){
        if(score>1){
            displayMsg(guess>number?"Too high!!":"Too low!!"); 
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.score').textContent=0;
            displayMsg("You lost the game"); 
        }
    }
    
});


let again=document.querySelector('.again');

again.addEventListener('click',()=>{
    score=20;
    document.querySelector('.score').textContent=score;
    number=Math.trunc(Math.random()*20)+1;
    console.log(number);
    displayMsg("Guess the Number...");
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('.number').style.width="15rem";

})