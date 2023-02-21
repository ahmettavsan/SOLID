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
// 3katlı bir bina yapıcaz her katın farklı olmasını istiyoruz
var BaseVehicle = /** @class */ (function () {
    function BaseVehicle(fast) {
        this._fast = fast;
    }
    BaseVehicle.prototype.SetMotorEngine = function (fast) {
        this._fast = fast;
    };
    BaseVehicle.prototype.stop = function () {
        console.log("stop");
    };
    BaseVehicle.prototype.start = function () {
        console.log("start");
    };
    BaseVehicle.prototype.speedUp = function () {
        this._fast.speedUp();
    };
    return BaseVehicle;
}());
var Car1 = /** @class */ (function (_super) {
    __extends(Car1, _super);
    function Car1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car1;
}(BaseVehicle));
var Car2 = /** @class */ (function (_super) {
    __extends(Car2, _super);
    function Car2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car2;
}(BaseVehicle));
var FastType1 = /** @class */ (function () {
    function FastType1() {
    }
    FastType1.prototype.speedUp = function () {
        console.log("fast type 1---->20s");
    };
    return FastType1;
}());
var FastType2 = /** @class */ (function () {
    function FastType2() {
    }
    FastType2.prototype.speedUp = function () {
        console.log("fast type 2----->3s");
    };
    return FastType2;
}());
var car = new Car1(new FastType1());
car.start();
car.speedUp();
car.SetMotorEngine(new FastType2());
car.speedUp();
car.stop();
