var ApertmentType;
(function (ApertmentType) {
    ApertmentType[ApertmentType["low"] = 0] = "low";
    ApertmentType[ApertmentType["standart"] = 1] = "standart";
    ApertmentType[ApertmentType["gold"] = 2] = "gold";
})(ApertmentType || (ApertmentType = {}));
var LowApertmentCalculate = /** @class */ (function () {
    function LowApertmentCalculate() {
    }
    LowApertmentCalculate.prototype.calculate = function (area) {
        return area * 5;
    };
    return LowApertmentCalculate;
}());
var StandartApertmentCalculate = /** @class */ (function () {
    function StandartApertmentCalculate() {
    }
    StandartApertmentCalculate.prototype.calculate = function (area) {
        return area * 10;
    };
    return StandartApertmentCalculate;
}());
var GoldApertmentCalculate = /** @class */ (function () {
    function GoldApertmentCalculate() {
    }
    GoldApertmentCalculate.prototype.calculate = function (area) {
        return area * 20;
    };
    return GoldApertmentCalculate;
}());
var costCaclulate = /** @class */ (function () {
    function costCaclulate() {
    }
    costCaclulate.prototype.calcBad = function (area, apertmentType) {
        var cost = 0;
        switch (apertmentType) {
            case ApertmentType.low:
                cost = area * 5;
                break;
            case ApertmentType.standart:
                cost = area * 10;
                break;
            case ApertmentType.gold:
                cost = area * 20;
                break;
            default:
                throw new Error("geçerli bir daire tipi girmelisiniz");
        }
        return cost;
    };
    costCaclulate.prototype.calculateGood = function (salary, salaryCalculate) {
        return salaryCalculate.calculate(salary);
    };
    return costCaclulate;
}());
var nesne = new costCaclulate();
console.log(nesne.calcBad(100, ApertmentType.gold));
console.log(nesne.calculateGood(100, new StandartApertmentCalculate()));
console.log(nesne.calculateGood(100, new LowApertmentCalculate()));
console.log(nesne.calculateGood(100, new GoldApertmentCalculate()));
