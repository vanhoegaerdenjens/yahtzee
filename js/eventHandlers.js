"use strict";
//on click events
document.getElementById("dice-button").addEventListener("click", () => {
    game.throwDice(htmlHelper.checkSelected());
    htmlHelper.addScore();
});

document.getElementById("new-game").addEventListener("click", () => {
    location.reload();
});

