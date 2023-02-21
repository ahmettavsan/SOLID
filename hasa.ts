// runtimeda motorun gücünü değiştirdik

abstract class BaseVehicle {
  public _fast: IFastly;
  constructor(fast: IFastly) {
    this._fast = fast;
  }
  SetMotorEngine(fast: IFastly) {
    this._fast = fast;
  }
  stop() {
    console.log("stop");
  }
  start() {
    console.log("start");
  }
  speedUp() {
    this._fast.speedUp();
  }
}

class Car1 extends BaseVehicle {}

class Car2 extends BaseVehicle {}

interface IFastly {
  speedUp();
}

class FastType1 implements IFastly {
  speedUp() {
    console.log("fast type 1---->20s");
  }
}
class FastType2 implements IFastly {
  speedUp() {
    console.log("fast type 2----->3s");
  }
}
var car = new Car1(new FastType1());
car.start();
car.speedUp();
car.SetMotorEngine(new FastType2());
car.speedUp();
car.stop();
