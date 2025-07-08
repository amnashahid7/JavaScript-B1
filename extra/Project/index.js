let randomNumber= Math.floor((Math.random()*100)+1);
// console.log(randomNumber);


let userInput= document.querySelector('#guessField');

let submit= document.querySelector('#subt');

let guesses= document.querySelector(".guesses");
let guessRemain= document.querySelector(".lastResult");
let resultPara= document.querySelector('.lowOrHi');


let prevGuess=[];
let playGame=true;



if(playGame){
    submit.addEventListener('click',function(e){
e.preventDefault();
        let guess= Number(userInput.value);
        console.log(guess);
        validateGuess(guess);
     
        
    })
}


function validateGuess(guess){
  if(guess<=0){
    alert("please  enter the value that is greater than 0")
  }
  else if(guess>100){
     alert("please  enter the value that is less than 100")
  }  else if (isNaN(guess)){
     alert("the input is in string/ please enter the number in the required range")
  }
  else{
    prevGuess.push(guess);
    console.log(prevGuess);
    
  }
}


function checkGuess(guess){

}


function displayMessage(){

}



function newGame(){

}

function endGame(){
    
}


