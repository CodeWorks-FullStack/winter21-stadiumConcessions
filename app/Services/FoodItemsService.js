import { ProxyState } from "../AppState.js"
import { FoodItem } from "../Models/FoodItem.js"
import { saveState } from "../Utils/LocalStorage.js";
import { toppingService } from "./ToppingsService.js";


class FoodItemsService {

  constructor() {
    ProxyState.on('foodItems', saveState)
  }

  createFoodItem(newFoodItem) {
    ProxyState.foodItems = [new FoodItem(newFoodItem), ...ProxyState.foodItems]
    console.log('food items in proxy', ProxyState.foodItems);
  }

  deleteFoodItem(foodItemId) {
    ProxyState.foodItems = ProxyState.foodItems.filter(f => f.id !== foodItemId)
    toppingService.deleteToppings(foodItemId)
  }

}

export const foodItemsService = new FoodItemsService()