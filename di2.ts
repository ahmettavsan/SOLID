class Person {
  private readonly _vehicle: Vehicle;
  constructor(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }
  gotoWork() {
    var car = new Car();
    //işe gitmek için aracı kullan Car nesnesine direk olarak bağımlı
    car.hareketEt();
  }
  gotoWork2() {
    //burda bağımlılık loose coupling çünkü artık sadece Vehicle interfaceini implemente eden bütün class nesneleriye bu metot çalışabilecektir...
    this._vehicle.hareketEt();
  }
}

class Car {
  hareketEt() {}
}

interface Vehicle {
  hareketEt();
}

class Car2 implements Vehicle {
  hareketEt() {
    console.log("konforlu yolculuk");
  }
}

class Taxi implements Vehicle {
  hareketEt() {
    console.log("pahalı ama konforlu");
  }
}

class Bus implements Vehicle {
  hareketEt() {
    console.log("kötü ama gidiyosun istedin yere");
  }
}
