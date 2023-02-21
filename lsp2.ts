// class BaseVehicle {
//   sporMode() {}
//   classicMode() {}
// }

// class Bentley extends BaseVehicle{
//     sporMode(): void {
//         console.log('spor mode var');
//     }
//     classicMode(): void {
//         console.log('classic mode var');
//     }
// }

// class Fiat extends BaseVehicle{
//     sporMode(): void {
//         throw new Error('spor mode özelliği yok');
//     }
//     classicMode(): void {
//         console.log('classic mode var');
//     }
// }

//fiat doblosu kırılıma uğrattı
//düzeltelim
class BaseVehicle {
  classicMode() {}
}

interface ISporVehicle {
  sporMode();
}

class Bentley extends BaseVehicle implements ISporVehicle {
  sporMode(): void {
    console.log("spor mode var");
  }
  classicMode(): void {
    console.log("classic mode var");
  }
}

class Fiat extends BaseVehicle {
  classicMode(): void {
    console.log("classic mode var");
  }
}
