class Person {
  id: number;
  name: string;
  email: string;
  password: string;
  birthyear: number;
  age: number;
}

class MemberRepository {
  //add metodu person nesnesinden gelen passwordu hashleyip db ye kayıt atıyor
  //business logic kodlar
  //yani üç sorumluluğu var
  add(t: Person) {
    //kullanıcının parolasının hashledik
    t.password = "xxxxxxxx";
    t.password = "yyyyyyyy";
    t.password = "aaaaaaaa";
    t.password = "abababab";
    t.password = "cdcdcdcd";
    //kullanıcının yaşının hesapladık
    let date = new Date();
    t.age = date.getFullYear() - t.birthyear; //
    //kullanıcıyı db'ye kaydettik  aynı metotta birden fazla işlem yaptık SRP aykırı bir durum...
    console.log(`Veritabanına ${t.name} başarı ile kaydedilmiştir`);
  }
}

class MemberRepository2 {
  //add metodu iki sorumluluğu alınmıştır.
  add(t: Person) {
    console.log(`Veritabanına ${t.name} başarı ile kaydedilmiştir`);
  }
  //service classındaki dal katmanındaki add methodunu çalıştıran service methodu gibi
  addHandler(t: Person) {
    const hashSet = this.passwordHashinHMA512(t.password);
    t.password = hashSet;
    const age = this.calcAge(t.birthyear);
    t.age = age;
    this.add(t);
  }
  calcAge(birthyear) {
    let date = new Date().getFullYear();
    return date - birthyear;
  }

  passwordHashingHMA256(password) {
    password = "xxxxxxxx";
    password = "yyyyyyyy";
    password = "aaaaaaaa";
    password = "abababab";
    password = "cdcdcdcd";

    return password;
  }
  passwordHashinHMA512(password) {
    password = "xxxxxxxx";
    password = "yyyyyyyy";
    password = "aaaaaaaa";
    password = "abababab";
    password = "cdcdcdcd";
    password = "xxxxxxxx";
    password = "yyyyyyyy";
    password = "aaaaaaaa";
    password = "tttttttt";
    password = "zzzzzzzz";

    return password;
  }
}
