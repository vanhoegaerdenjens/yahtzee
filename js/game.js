"use strict";
//storing the dice results
class Game {
    attempts = 0;
    turns = 1;
    dices = [];
    topCount = [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
        { id: 6, value: 0 }
    ];
    started = false;
    constructor() {

    };

    firstThrow() {
        for (let i = 0; i < 5; i++) {
            const dice = new Dice();
            const result = dice.rollDice();
            htmlHelper.showDice(result);
        }
        this.started = true;
    };

    newThrow(amountSelected) {
        const newDices = 5 - amountSelected;
        for (let i = 0; i < newDices; i++) {
            const dice = new Dice();
            const result = dice.rollDice();
            htmlHelper.showDice(result);
        };
    };

    storeDice() {
        const selectedDice = document.querySelectorAll("li");
        const dices = this.dices;
        selectedDice.forEach(function (element) {
            const value = element.dataset.value;
            dices.push(value);
        })
    };

    addAttempts() {
        if (this.attempts < 3) {
            this.attempts++;
        } else {
            this.attempts = 1;
            this.turns++;
        };
    };

    showAttempts() {
        return this.attempts;
    };

    showTurns() {
        return this.turns;
    };

    sumEyes() { //push the sum of the eyes of each dice into corresponding id of topCount;
        for (const dice of this.dices) {
            this.topCount.find(element => element.id === Number(dice)).value += Number(dice);
        };
    };

    calculateTotal() {
        const total = document.getElementById("total");
        let totalScore = 0;
        for (const [key, value] of Object.entries(object)) {
            const sub = Number(key) * value;
            totalScore = totalScore + sub;
        }
        total.innerHTML = "";
        total.innerHTML = totalScore;
    };

    calculatePairings(object) {
        //three of a kind = at least 3 dice the same = sum of all dice
        //four of a kind = at least 4 dice the same = sum of all dice
        //full house = three of one number an two of another = 25p
        //small straight = four sequential dice = 30p
        //large straight = five sequential dice = 40p
        //chance = any combination = sum of all dice
        //yahtzee all five dice the same = 50p
    };
}