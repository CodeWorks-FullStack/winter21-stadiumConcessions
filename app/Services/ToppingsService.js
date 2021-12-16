import { ProxyState } from "../AppState.js"
import { Topping } from "../Models/Topping.js"
import { saveState } from "../Utils/LocalStorage.js";

class ToppingsService {

  constructor() {
    ProxyState.on('toppings', saveState)
  }

  createTopping(newTopping) {
    ProxyState.toppings = [new Topping(newTopping), ...ProxyState.toppings]
    console.log('toppings', ProxyState.toppings);
  }

  deleteToppings(foodItemId) {
    ProxyState.toppings = ProxyState.toppings.filter(t => t.foodItemId !== foodItemId)
  }
}

export const toppingService = new ToppingsService()