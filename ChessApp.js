const chessboard = document.getElementById("chessboard");
const startButton = document.getElementById("start-btn");
const boardArray = Array.from(chessboard.getElementsByTagName("div"));

function initialState() {

}




startButton.addEventListener('click', function() {
    initialState();
    console.log([0]);
})