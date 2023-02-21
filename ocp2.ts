enum CoffeeType {
  latte,
  whitecholatemocha,
  chaitealatte,
  filtre,
}
interface ICoffeMaker {
  makeCoffee(): Coffee;
}

class makeLatte implements ICoffeMaker {
  makeCoffee(): Coffee {
    let coffee = new Coffee();
    coffee.hasMilk = true;
    coffee.milk = 200;
    coffee.name = "latte";
    coffee.includes = ["milk", "sugar", "kuba coffee bean"];
    return coffee;
  }
}
class makeChaiTeaLatte implements ICoffeMaker {
  makeCoffee(): Coffee {
    let coffee = new Coffee();
    coffee.hasMilk = true;
    coffee.milk = 100;
    coffee.name = "chai tea latte";
    coffee.includes = [
      "sahlep",
      "milk",
      "sugar",
      "tarçın",
      "arizona coffee bean",
    ];
    return coffee;
  }
}

class makeFiltreCoffee implements ICoffeMaker {
  makeCoffee(): Coffee {
    let coffee = new Coffee();
    coffee.hasMilk = false;
    coffee.milk = 0;
    coffee.name = "filtre";
    coffee.includes = ["Colombia coffee bean"];
    return coffee;
  }
}

class makeWhiteCholateMocha implements ICoffeMaker {
  makeCoffee(): Coffee {
    let coffee = new Coffee();
    coffee.hasMilk = true;
    coffee.milk = 100;
    coffee.name = "chai tea latte";
    coffee.includes = [
      "chocolate",
      "milk",
      "sugar",
      "white chocolate",
      "soft coffee bean",
    ];
    return coffee;
  }
}
class CoffeeMachine {
  coffeeMaker(coffeetype: CoffeeType): Coffee {
    let coffee = new Coffee();
    switch (coffeetype) {
      case CoffeeType.chaitealatte:
        coffee.hasMilk = true;
        coffee.milk = 100;
        coffee.name = "chai tea latte";
        coffee.includes = [
          "sahlep",
          "milk",
          "sugar",
          "tarçın",
          "arizona coffee bean",
        ];
        break;
      case CoffeeType.filtre:
        coffee.hasMilk = false;
        coffee.milk = 0;
        coffee.name = "filtre";
        coffee.includes = ["Colombia coffee bean"];
        break;
      case CoffeeType.latte:
        coffee.hasMilk = true;
        coffee.milk = 200;
        coffee.name = "latte";
        coffee.includes = ["milk", "sugar", "kuba coffee bean"];
        break;
      case CoffeeType.whitecholatemocha:
        coffee.hasMilk = true;
        coffee.milk = 100;
        coffee.name = "chai tea latte";
        coffee.includes = [
          "chocolate",
          "milk",
          "sugar",
          "white chocolate",
          "soft coffee bean",
        ];
        break;

      default:
        throw new Error("Nasıl bir kahve istiyorsunuz belirtin?");
        break;
    }
    return coffee;
  }
}

class Coffee {
  name: string;
  hasMilk: boolean;
  milk: number;
  sugar: number;
  includes: string[];
}

class coffeeOrderHandler {
  coffeeType: CoffeeType;
  coffeeMaker: ICoffeMaker;

  coffeeOrderHandler(coffeeType: CoffeeType) {
    let coffeeMakerArr = [
      { key: CoffeeType.chaitealatte, coffeeMaker: new makeChaiTeaLatte() },
      { key: CoffeeType.filtre, coffeeMaker: new makeFiltreCoffee() },
      { key: CoffeeType.latte, coffeeMaker: new makeLatte() },
      {
        key: CoffeeType.whitecholatemocha,
        coffeeMaker: new makeWhiteCholateMocha(),
      },
    ];
    let result = coffeeMakerArr.find((x) => x.key == coffeeType)?.coffeeMaker;
    return result;
  }
}

let coffeeRequest = new CoffeeMachine();
console.log(coffeeRequest.coffeeMaker(CoffeeType.chaitealatte));

let coffeeOrder = new coffeeOrderHandler();
let result = coffeeOrder.coffeeOrderHandler(CoffeeType.chaitealatte);
console.log(result);
