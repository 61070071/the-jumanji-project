function diceFunction(player) {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    theDice = document.getElementById("theDice");
    theDice.setAttribute("score", dice);
    moveCounter(dice)
}

function moveCounter(move) {
    player = document.getElementById("player1");
    start = +(player.getAttribute("step"));
    last = start+move;
    moveFunction(start, last)
}

function moveFunction(start, last) {
    start += 1;
    setTimeout(function(){
        console.log(start);
        player.setAttribute("step", start)
        if(start < last){
            moveFunction(start, last);
        }}, 400);

}