interface ITakePhoto {
  masajyap();
}

class BaseSofa {
  isin() {
    console.log("isinma başladı");
  }
}

class SofaGold extends BaseSofa implements ITakePhoto {
  masajyap() {
    console.log("fotoğraf çekildi");
  }
}

class SofaStandart extends BaseSofa {
  masajyap() {
    throw new Error("masaj yapma özelliği yok");
  }
}

let sofa: BaseSofa;

sofa = new SofaGold();
sofa.isin();

if (sofa instanceof SofaGold) {
  (sofa as SofaGold).masajyap();
}

sofa = new SofaStandart();
