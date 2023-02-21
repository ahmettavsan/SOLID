enum food {
  patlıcan,
  pizza,
  pilav,
}

//görüldüğü üzere restaurant AliGarsona bağımlıdır
//çünkü bağımlılık bir metot class işlevlerini yerine getirebilmek için başka bir classa nesneye ihtiyaç duyuyorsa bu class ihtiyaç duyduğu classa bağımlıdır
//AhmetGarsona somut olarak hihg coupling şeklinde bağımlı
//makefood ahmetgarson nesnesi olmadan çalışamıycak bu durum sıkıntı
//ahmetgarson işten çıksa işler durucak
//bu yüzden biz bunu bu bağımlılığı soyut nesneler üzerinden sağlamalıyız
//yani ahmetgarsona bağımlı değilde ahmetgarsonun işlemlerini yapabilecek kişilere ihtiyacımız var

class restaurant {
  makeFood() {
    let garson = new AliGarson();
    garson.siparisAl();
    console.log("garsondan alınan siparişi yap");
    console.log("yemeği bitir");
    console.log("siparişii garsona teslim et");
    garson.siparisiGotur(food.patlıcan);
  }
}

class AliGarson {
  siparisAl() {
    console.log("salona git");
    console.log("müşterilere bak");
    console.log("sipariş al");
    console.log("siparişi mutfağa ilet");
  }
  siparisiGotur(food) {
    console.log("siparişi teslim al");
    console.log("siparişi müşteriye götür");
    console.log(`${food} teslim edildi`);
  }
}

//görüldüğü üzere artık restaurant IGarson daki işlevleri implemente eden herkesle müşteriden sipariş alıp müşteriye iletebilecek
class restaurant2 {
  private readonly _garson: IGarson;
  constructor(garson: IGarson) {
    this._garson = garson;
  }
  makeFood() {
    console.log("garsondan siparişi al");
    this._garson.siparisAl();
    console.log("siparişi yapmaya başla");
    console.log("hazırladıktan sonra garsona teslim et");
    this._garson.siparisTeslimEt();
  }
}

interface IGarson {
  siparisAl();
  siparisTeslimEt();
}

class MehmetGarson2 implements IGarson {
  siparisAl() {
    console.log("salona git hızlıca müşterilere bak siparişi al");
    console.log("siparişi mutfağa ilet");
  }
  siparisTeslimEt() {
    console.log("siparişi mutfaktan teslim al");
    console.log("siparişi müşteriye teslim et");
  }
}

class VeliGarson2 implements IGarson {
  siparisAl() {
    console.log("salona git hızlıca müşterilere bak siparişi al");
    console.log("kasaya siparişi ilet ardından mutfağa git");
    console.log("siparişi mutfağa ilet");
  }
  siparisTeslimEt() {
    console.log("siparişi mutfaktan teslim al");
    console.log("siparişi hızlıca salona götür");
    console.log("siparişi müşteriye teslim et");
  }
}
