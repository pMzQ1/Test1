document.addEventListener('DOMContentLoaded', function() {
    const puzzleContainer = document.getElementById('puzzle-container');
    const wordList = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
    let selectedWord = '';

    function createPuzzle() {
        puzzleContainer.innerHTML = '';
        selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
        const letters = selectedWord.split('');

        letters.forEach(letter => {
            const letterDiv = document.createElement('div');
            letterDiv.classList.add('letter');
            letterDiv.textContent = letter;
            letterDiv.style.display = 'none';
            puzzleContainer.appendChild(letterDiv);
        });

        setTimeout(() => {
            document.querySelectorAll('.letter').forEach(letterDiv => {
                letterDiv.style.display = 'block';
            });
        }, 1000);
    }

    function checkGuess(guess) {
        if (guess.toLowerCase() === selectedWord) {
            alert('Congratulations! You guessed the word!');
            createPuzzle();
        } else {
            alert('Try again!');
        }
    }

    document.getElementById('guess-button').addEventListener('click', function() {
        const guessInput = document.getElementById('guess-input').value;
        checkGuess(guessInput);
    });

    createPuzzle();
});