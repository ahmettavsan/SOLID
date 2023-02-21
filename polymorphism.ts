class Human {
  name: string;
  surname: string;
  talk() {
    console.log("insanlar konuşur");
  }
}

class TurkPerson extends Human {
  talk(): void {
    console.log("türkler türkçe konuşur");
  }
}

class GermanPerson extends Human {
  talk(): void {
    console.log("almanlar almanca konuşur");
  }
}

var trperson = new TurkPerson();
trperson.name = "ahmet";
trperson.surname = "tavşan";
trperson.talk();

var deperson = new GermanPerson();
deperson.name = "hans";
deperson.surname = "gratel";

deperson.talk();
