
let currentPlayer = 'X'
const statusDisplay = document.querySelector('.game--status')
const currentPlayerTurn = () =>  `It's ${currentPlayer}'s turn!`
const winnerMessage = () => `${currentPlayer} is the winner!`
const drawMessage = () => `It's a draw!`
statusDisplay.innerHTML = currentPlayerTurn();

gameState = ["", "", "", "", "", "", "", "", ""];
activeGame = true;



handleCellClick = (event) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(
        (clickedCell.getAttribute('.data-cell-index')))

if (gameState[clickedCellIndex] !== "" ||  !activeGame) {
    return
}
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation(); 
}


handleCellPlayed = (clickedCell, clickedCellIndex) => {
    currentPlayer = gameState[clickedCellIndex]
    clickedCell.innerHTML = currentPlayer

}

handlePlayerChange = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currentPlayerTurn()

}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



handleGameWinner = () => {
    let roundWon = false;


}

handleRestartGame = () => {
    let activeGame = true;
    currentPlayer = 'X'
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
    .forEach(cell => cell.innerHTML = "");

}



document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('click', handleCellClick)
});