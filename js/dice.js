"use strict";

class Dice {
    id;
    value;
    locked = false;
    constructor() {
        this.rollDice();
    };

    rollDice() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.id = this.value;
    };

    getValue() {
        return this.value;
    };

    getId() {
        return this.id;
    };
};