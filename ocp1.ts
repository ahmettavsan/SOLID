enum ApertmentType {
  low,
  standart,
  gold,
}

interface ICostCalculate {
  calculate(area: number): number;
}

class LowApertmentCalculate implements ICostCalculate {
  calculate(area: number): number {
    return area * 5;
  }
}
class StandartApertmentCalculate implements ICostCalculate {
  calculate(area: number): number {
    return area * 10;
  }
}
class GoldApertmentCalculate implements ICostCalculate {
  calculate(area: number): number {
    return area * 20;
  }
}

class costCaclulate {
  calcBad(area: number, apertmentType: ApertmentType) {
    let cost = 0;
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
  }
  calculateGood(salary: number, salaryCalculate: ICostCalculate) {
    return salaryCalculate.calculate(salary);
  }
}

let nesne = new costCaclulate();
console.log(nesne.calcBad(100, ApertmentType.gold));
console.log(nesne.calculateGood(100, new StandartApertmentCalculate()));
console.log(nesne.calculateGood(100, new LowApertmentCalculate()));
console.log(nesne.calculateGood(100, new GoldApertmentCalculate()));
