var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.talk = function () {
        console.log("insanlar konuşur");
    };
    return Human;
}());
var TurkPerson = /** @class */ (function (_super) {
    __extends(TurkPerson, _super);
    function TurkPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TurkPerson.prototype.talk = function () {
        console.log("türkler türkçe konuşur");
    };
    return TurkPerson;
}(Human));
var GermanPerson = /** @class */ (function (_super) {
    __extends(GermanPerson, _super);
    function GermanPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GermanPerson.prototype.talk = function () {
        console.log("almanlar almanca konuşur");
    };
    return GermanPerson;
}(Human));
var trperson = new TurkPerson();
trperson.name = "ahmet";
trperson.surname = "tavşan";
trperson.talk();
var deperson = new GermanPerson();
deperson.name = "hans";
deperson.surname = "gratel";
deperson.talk();
