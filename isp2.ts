interface Animal {
  fly();
  run();
  jump();
}
//bunu yapmak doğru değil çünkü snake in yapamaycağı şeyleri ona yapıyomuş gibi o şablonu arayüzü kullandırtıyoruz
class Snake implements Animal {
  fly() {
    throw new Error("Method not implemented.");
  }
  run() {
    throw new Error("Method not implemented.");
  }
  jump() {
    throw new Error("Method not implemented.");
  }
}

interface Flyable {}

interface runable {}

interface jumpable {}

class cat implements runable, jumpable {}

class bird implements Flyable {}
