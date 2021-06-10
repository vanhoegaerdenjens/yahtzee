"use strict";

class Dice {
    constructor(id) {
        this.rollDice();
        // this.blocked = false;
        // this.id = id;
    };

    rollDice() {
        this.value = Math.floor(Math.random() * 6) + 1;
        return this.value;
    };

    getId() {

    };
}