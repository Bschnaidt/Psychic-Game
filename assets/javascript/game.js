const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
let wins = 0;
let losses = 0;
let guesses = 10;
let userGuesses = [];
var computerChoice = alphabet[returnRandomIndex(alphabet)];

    function returnRandomIndex(arr){
        return Math.floor(Math.random() * arr.length)
    }

    function resetGame() {
            guesses = 10;
            computerChoice = alphabet[returnRandomIndex(alphabet)];
             userGuesses = []
    }

    

    console.log(computerChoice)

    document.onkeypress = function(event) {
        var userGuess = event.key.toLowerCase();
        
        if(alphabet.indexOf(userGuess) < 0 || userGuesses.indexOf(userGuess) > -1){
            //Here we did not choose a letter
            alert('Hey you must choose a letter or it looksmlike you might have chosen that already.')
        }
        else {
            //here we are good to run the rest of our application
    
        
    
        if(userGuess === computerChoice){
            wins++;
            resetGame();
        }else{
            guesses--;
            userGuesses.push(userGuess)

        }
    
        if(guesses === 0){
            losses++
            resetGame();
            

        }


        
    
        document.getElementById('Wins').innerHTML = "Wins: " + wins;
        document.getElementById('Losses').innerHTML = "Losses: " + losses;
        document.getElementById('Left').innerHTML = "Guesses left: " + guesses;
        document.getElementById('soFar').innerHTML = "Guessed so far: " + userGuesses.join(', '); //b, c
    }
    
    }  
