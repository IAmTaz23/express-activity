const seasonings = ["CUMIN", "PAPRIKA", "CREOLE", "GARLIC POWDER", "CARDAMOM", "CORIANDER"]
const wordCompletions = ["_ _ _ _ _", "_ _ _ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _"]
const hints = [ "Omega Psi Phi","Daughter of Mr. Salt and Mrs. Pepper","Tony Chachere","Goes on Everything","In the Ginger family", "A part of the Parsley family"]

const randomWord = Math.floor(Math.random() * seasonings.length);

const seasoning = seasonings[randomWord]
const wordCompletion = wordCompletions[randomWord]
const hint = hints[randomWord]

const wordElement = document.getElementById ("seasoning");

wordElement.innerText = wordCompletion




const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const buttonsContainer = document.querySelector('#buttons-container');
    buttonsContainer.classList.add('buttons-container');

    for (let i = 0; i < alphabet.length; i++) {
    let button = document.createElement("button");
    button.classList.add('btn-color');
    button.innerText = alphabet[i];
    button.onclick = function (clickedLetter) {
        if(seasoning.includes(this.innerText) === true) {
            let indexOfthisinnerText = seasoning.indexOf
            let stringArray = wordCompletion.split('')
            stringArray[indexOfthisinnerText] = letter
            let newHiddenArray
        } else{
            alert("OUT")
        }
        console.log(alphabet[i])


    };
    buttonsContainer.appendChild(button);
}

const hintButton = document.getElementById("hintButton");

hintButton.addEventListener("click", function() {
    alert(hint)
})




let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;



// guessedWord();

// let wordCompletion = seasoning[answer];

// for(
//     let i = 0; i < wordCompletion; i++){
//         answer += " _ ";
//     }
//     document.getElementById("keyboard").textContent = answer;



//   function guessedWord(){
//          wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
       
//         document.getElementById('Display').innerHTML = wordStatus;
// }

    // if(wordStatus.value ){

        // alert("Empty Input box. Please add input letter");
    // }
    // let letter = wordStatus.value.toLowerCase();
//     wordStatus.value = "";

//     if(guessed.includes(letter)){
//         alert("you have already guessed that letter!");
//     }
//     guessed.push(letter);

//     let updatedDisplay = "";
//     let allLettersGuessed = true;
//     for (let i = 0; i < wordCompletion.length; i++){
//         if (guessed.includes(wordCompletion[i])){
//             updatedDisplay += wordCompletion[i] + " ";
//         } else {
//             updatedDisplay += " _ ";
//             allLettersGuessed = false;
//         }
//     }
//     document.getElementById("answer").textContent = updatedDisplay

//     if (allLettersGuessed) {
//         alert("Congratulations! You're smarter than a 5th Grader!!!");
//     }

  








// guessedWord()
