var RestaurantEmployee = /** @class */ (function () {
    function RestaurantEmployee() {
    }
    RestaurantEmployee.prototype.makeDinner = function (food) {
        console.log("salona git sipariş al");
        console.log("yemek yapmaya başla");
        var date = new Date().getMinutes();
        console.log(date);
    };
    return RestaurantEmployee;
}());
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());
var rst = new RestaurantEmployee();
var food = new Food();
rst.makeDinner(new Food());
