enum wheel {
  classicWheel,
  bigWheel,
  sporWhell,
}

//is-a ilişkisi ile bütün cardan kalıtım alan araç tipleri aynı tip özelliklere sahip olucak biz bunu has-a ile değiştirebiliriz
// class Car{
//     public backwardRight(){
//         return wheel.classicWheel;
//     };
//     public backwardLeft(){
//         return wheel.classicWheel;
//     };
//     public forwardRight(){
//         return wheel.classicWheel;
//     };
//     public forwardLeft(){
//         return wheel.classicWheel;
//     };

// }

// class CarType1 extends Car{

// }
// class CarType2 extends Car{

// }

class Car {
  private _forwardRightWheel: IForwardRightWheel;
  private _forwardleftWheel: IForwardLeftWheel;
  constructor(
    forwardRightWheel: IForwardRightWheel,
    forwardleftWheel: IForwardLeftWheel
  ) {
    this._forwardRightWheel = forwardRightWheel;
    this._forwardleftWheel = forwardleftWheel;
  }

  public backwardRight() {
    return wheel.classicWheel;
  }
  public backwardLeft() {
    return wheel.classicWheel;
  }
}
interface IForwardLeftWheel {
  forwardleft();
}
interface IForwardRightWheel {
  forwardright();
}

class CarType1 extends Car implements IForwardLeftWheel, IForwardRightWheel {
  forwardleft() {
    return wheel.bigWheel;
  }
  forwardright() {
    return wheel.classicWheel;
  }
}
class CarType2 extends Car implements IForwardLeftWheel, IForwardRightWheel {
  forwardleft() {
    return wheel.sporWhell;
  }
  forwardright() {
    return wheel.sporWhell;
  }
}
