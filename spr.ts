class RestaurantEmployee {
  name: string;
  lastName: string;
  isBusy: boolean;
  health: number;
  makeDinner(food: Food): Food {
    //bu fonksiyona bakıldığında bir çalışan önce gidip salondan sipariş alıp mutfağa geçiğ mutfakta yemek yapıyor
    while (this.health > 0) {
      console.log("salona git sipariş al");
      this.health -= 5;
      console.log("yemek yapmaya başla");
      setTimeout(() => {
        food.isReady = true;
        this.health -= 5;
      }, food.cooktime);
      console.log("salona git yemeği masaya bırak");
      this.health -= 5;
    }

    return food;
  }
}

class Food {
  name: string;
  cooktime: number;
  isReady: boolean;
}
var rst = new RestaurantEmployee();
var food = new Food();
rst.makeDinner(new Food());
