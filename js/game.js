"use strict";
//storing the dice results
class Game {
    attempts = 0;
    turns = 1;
    selectedDice = [];
    score = [
        { id: 1, value: 0, div: "ones" },
        { id: 2, value: 0, div: "twos" },
        { id: 3, value: 0, div: "threes" },
        { id: 4, value: 0, div: "fours" },
        { id: 5, value: 0, div: "fives" },
        { id: 6, value: 0, div: "sixes" }
    ];
    started = false;
    constructor() {

    };

    throwDice(selected) {
        let amount;
        this.started ? amount = 5 - selected : amount = 5;
        this.emptyValue();
        htmlHelper.clearUnselected();
        for (let i = 0; i < amount; i++) {
            const dice = new Dice().rollDice();
            this.addValue(dice);
            htmlHelper.showDice(dice);
        };
        this.started = true;
    };
    
    storeSelectedDice() {
        const selected = document.querySelectorAll("li");
        const selectedDice = this.selectedDice;
        selected.forEach(function (element) {
            const value = element.dataset.value;
            selectedDice.push(value);
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

    addValue(object) { //push the sum of the eyes of the dice into corresponding id of score;
        this.score.find(element => element.id === Number(object)).value += Number(object);
    };

    emptyValue() {
        for (const object of this.score) {
            object.value = 0;
        }
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