"use strict";
class Person {
    constructor(id, name, creditCard) {
        this.id = id;
        this.name = name;
        this._creditCard = creditCard;
    }
    get creditCard() {
        let letters = [...this._creditCard];
        for (let index = 4; index < letters.length - 4; index++) {
            letters[index] = "*";
        }
        return letters.join();
    }
}
var person1 = new Person(1, "ahmet", "5504998023321104");
console.log(person1.creditCard); //5504 **** **** 1104 console.log olarak yazıcak encapsilation getine örnek...
console.log(person1);
