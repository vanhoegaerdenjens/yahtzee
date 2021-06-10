"use strict";
//on click events
document.getElementById("dice-button").addEventListener("click", () => {
    if (!game.started) {
        game.firstThrow();
    } else {
        htmlHelper.clearUnselected();//reset the dice shown on screen
        game.newThrow(htmlHelper.checkSelected());//check how many dices should be rerolled and roll
    };
    game.addAttempts();
    htmlHelper.showAttempts();
    htmlHelper.showTurns();
    if (game.attempts === 3) {
        game.storeDice();
        game.sumEyes();
    };
});

document.getElementById("new-game").addEventListener("click", () => {
    location.reload();
});

