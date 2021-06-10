"use strict";
//add to html functions

const htmlHelper = {
    showDice(value) {
        const element = document.createElement("li");
        const list = document.getElementById("dices");
        element.dataset.value = `${value}`;
        element.innerHTML = `<img src="../dobbelstenen/${value}.png" data-value="${value}">`;
        element.addEventListener("click", function() { element.classList.toggle("selected");});
        list.appendChild(element);
    },

    showAttempts() {
        const element = document.createElement("p");
        const div = document.getElementById("attempts");
        div.innerHTML = "";
        element.innerHTML = `Attempts: ${game.showAttempts()} / 3`;
        div.appendChild(element);
    },

    showTurns() {
        const element = document.createElement("p");
        const div = document.getElementById("turns");
        div.innerHTML = "";
        element.innerHTML = `Turn: ${game.showTurns()}`;
        div.appendChild(element);
    },

    clearUnselected() {
        const unselected = document.querySelectorAll("li:not(.selected)")
        for (let i = 0; i < unselected.length; i++) {
            unselected[i].remove();
        };
    },

    checkSelected() {
        const selected = document.getElementsByClassName("selected");
        return selected.length;
    },

    addScore(value) {
        const cell = document.querySelector(`[data-value="${value}"]`);
        diceScore[value]++;
        cell.innerHTML = "";
        cell.innerHTML = diceScore[value];
    },
};