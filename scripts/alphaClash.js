// function playNow() {
//     // console.log('Play Start Now');

//     // Hide the Home Screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show The Playground
//     const playGroundSection = document.getElementById('play-ground');
//     console.log(playGroundSection.classList.remove('hidden'));
// }

function continueGame() {
    // Generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    // Set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // Set background color to the focused alphabet
    setBackgroundColor(alphabet);
}

function playNow() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}