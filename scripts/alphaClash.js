// function playNow() {
//     // console.log('Play Start Now');

//     // Hide the Home Screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show The Playground
//     const playGroundSection = document.getElementById('play-ground');
//     console.log(playGroundSection.classList.remove('hidden'));
// }

function handleKeyboardButtonPress(event) {
    // console.log('button pressed');
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);


    // Stop the game if pressed 'Esc'
    if(playerPressed === 'Escape') {
        gameOver();
    }

    // Get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement);
    const currentText = currentAlphabetElement.innerText;
    const expectedAlphabet = currentText.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // Check matched or not
    if(playerPressed === expectedAlphabet) {
        console.log('You get a point');

        // // Update Score
        // // 1. Get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // 2. Increase the score by 1
        const newScore = currentScore + 1;

        // // 3. Show the updated score
        // currentScoreElement.innerText = newScore;

        // Start a new round
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You missed,you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);


        if(updatedLife === 0) {
            gameOver();
        }

        // // Get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // Reduce the life count
        // const newLife = currentLife - 1;

        // // Display the updated life
        // currentLifeElement.innerText = newLife; 
    }

}


document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // Generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // Set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // Set background color to the focused alphabet
    setBackgroundColor(alphabet);
}

function playNow() {
    hideElementById('home-screen');
    hideElementById('final-round');
    showElementById('play-ground');


    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}


function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected highlighted alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet);
}