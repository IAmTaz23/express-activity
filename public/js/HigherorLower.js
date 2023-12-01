const randomNumber = Math.floor(Math.random() * 100)

function guessNumber(number) {
console.log(number)
  //  let guess = prompt("Guess a number between 1 and 100");
    console.log(guess)

   
    if (guess == number) {
      alert ("You got it! The number was " + number);
    }
    else if (guess < number) {
      alert ("Higher");
      guessNumber(randomNumber);
    } else {
     alert ("Lower");
     guessNumber(randomNumber);	
    } 

   
  }
  


  
  guessNumber(randomNumber)
  