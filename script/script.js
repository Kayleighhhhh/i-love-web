// Alle vakjes ophalen
const cells = document.querySelectorAll('.cell');

// Status tekst ophalen
const statusText = document.querySelector('.status');

// Reset knop ophalen
const resetButton = document.querySelector('.reset-button');

// Start speler
let currentPlayer = 'X';

// Spel actief of niet
let gameActive = true;

// Winnende combinaties
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Klik op een vakje
cells.forEach(cell => {
    cell.addEventListener('click', () => {

        // Stop als vakje gevuld is of spel klaar is
        if (cell.textContent !== '' || !gameActive) {
            return;
        }

        // Zet symbool in vakje
        cell.textContent = currentPlayer;

        // Check of iemand gewonnen heeft
        if (checkWin()) {
            statusText.textContent = `Speler ${currentPlayer} wint! 🎉`;
            gameActive = false;
            return;
        }

        // Wissel van speler
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Speler ${currentPlayer} is aan de beurt`;
    });
});

// Controleer of speler heeft gewonnen
function checkWin() {
    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];

        if (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        ) {
            return true;
        }
    }
    return false;
}

// Reset het spel
resetButton.addEventListener('click', () => {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    statusText.textContent = 'Speler X is aan de beurt';
});

// Starttekst
statusText.textContent = 'Speler X is aan de beurt';
