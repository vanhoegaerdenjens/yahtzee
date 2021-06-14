"use strict";
//on click events
document.getElementById("dice-button").addEventListener("click", () => {
    game.throwDice(htmlHelper.checkSelected());
    game.addValue();
    htmlHelper.showDice();
    htmlHelper.showScore();
    if (!game.started) { game.started = true; }
});

document.getElementById("new-game").addEventListener("click", () => {
    location.reload();
});

