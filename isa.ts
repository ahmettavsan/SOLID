abstract class Animal {
  go() {
    console.log("ileri gider");
  }
  abstract jump();
}

class Snake extends Animal {
  jump() {
    throw new Error("i cant jump");
  }
}

class Cat extends Animal {
  jump() {
    console.log("i can jump");
  }
}
