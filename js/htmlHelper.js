"use strict";
//add to html functions

const htmlHelper = {
    showDice() {
        const dices = game.turnDices;
        for (const object of dices) {
            const element = document.createElement("li");
            const list = document.getElementById("dices");
            element.dataset.value = `${object.id}`;
            element.innerHTML = `<img src="../dobbelstenen/${object.id}.png">`;
            element.addEventListener("click", function () { element.classList.toggle("selected"); });
            list.appendChild(element);
        };
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

    showScore() {
        const score = game.score;
        for (const object of score) {
            const element = document.createElement("a");
            const div = document.getElementById(`${object.div}`);
            div.innerHTML = "";
            element.innerHTML = `${object.value}`;
            div.appendChild(element);
        }
    },
};