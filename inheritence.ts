class Person {
  buyHome() {
    console.log("I can buy home");
  }
}

class Person1 extends Person {}

var person = new Person();
person.buyHome();

//kalıtım yoluyla kalıtım aldığımız classın özelliklerine erişebilir işlevlerini kullanabiliriz.
