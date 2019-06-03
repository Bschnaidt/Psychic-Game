const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let randIndex = generateRandomIndex();

let randLetter = alphabet[randIndex];
console.log(randLetter)
function generateRandomIndex() {
    return Math.floor(Math.random() * alphabet.length);
}
const key = 'key'
document.onkeypress = function(event) {
    console.log('key is pressed', event.key);

    console.log(alphabet.indexOf(event.key.toLowerCase()));

    if(alphabet.indexOf(event.key.toLowerCase()) < 0){
        //Here we did not choose a letter
        alert('Hey you must choose a letter')
    }
    else {
        //here we are good to run the rest of our application
        
    }
}
//At some point later whne we reset game we will need to do this
// randIndex = generateRandomIndex();
// randLetter = alphabet[randIndex];
// console.log(randLetter)
