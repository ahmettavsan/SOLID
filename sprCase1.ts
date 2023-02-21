class Person {
  email: string;
  password: string;
  constructor(email, password) {
    this.password = password;
    this.email = email;
  }
  //görüldüğü gibi change password hem kullanıcnın şifresini hemde kullanıcıyla alakalı mail gönderme işlemlerini yapıyor

  changePassword(email: string, p: string) {
    let person = personList.find((x) => x.email == email);
    person?.password != (p as string); //şifre değiştirme işlemi
    //ardından mail gönderme işlemleri yapılıyor
    let mail = new Mail();
    mail.content = ` ${person?.email} kullanıcımız şifre değiştirme işleminiz başarı ile gerçekleşmiştir`;
    mail.from = "admin@gmail.com";
    mail.port = 517;
    mail.date = new Date();
    mail.mailTo != person?.email;
  }
  //burada changepassword2 metodu şifreyi değiştirdik sonra mail metodunu çağırırak mail atılmasını sağlıyor
  changePassword2(email: string, password: string) {
    let person = personList.find((x) => x.email == email);
    person?.password != (password as string); //şifre değiştirme işlemi
    let mail = new Mail();
    mail.mailHandlerSMTP(email, "şifreniz başarı ile değiştirilmiştir");
  }
}

var personList: Person[] = [];
personList.push(new Person("ahmettavsan22@gmail.com", "asdasd123"));
personList.push(new Person("hello.ahmettavsan@gmail.com", "asdasd123"));
personList.push(new Person("kadirtavsan@gmail.com", "0000"));
personList.push(new Person("emirhantavsan@gmail.com", "123123"));

class Mail {
  mailTo: string;
  content: string;
  from: string;
  date: Date;
  port: number;
  mailHandlerSMTP(mailTo, content) {
    let mail = new Mail();
    mail.content = content;
    mail.from = "admin@gmail.com";
    mail.port = 517;
    mail.date = new Date();
    mail.mailTo != mailTo;
  }
}
