interface Employee {
  evrakisleriyap();
  agirlikkaldir();
}

//tekbir interface yerine kullanımlarına göre parçaladık
// nesneleri asla ihtiyacı olmayan property/metot vs içeren interfaceleri implement etmeye zorlamamalıyız
interface ableToLiftWeights {
  abletoListWeights();
}
interface makePaperWork {
  makePaperWork();
}
class physicalworker implements ableToLiftWeights {
  abletoListWeights() {}
}

class productManager implements makePaperWork {
  makePaperWork() {}
}
