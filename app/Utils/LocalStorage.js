import { ProxyState } from "../AppState.js";
import { FoodItem } from "../Models/FoodItem.js";
import { Topping } from "../Models/Topping.js";


export function saveState() {
  localStorage.setItem('Concessions', JSON.stringify({
    foodItems: ProxyState.foodItems,
    toppings: ProxyState.toppings
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('Concessions'))
  console.log('load state data', data);
  if (data != null) {
    ProxyState.foodItems = data.foodItems.map(f => new FoodItem(f))
    ProxyState.toppings = data.toppings.map(t => new Topping(t))
    console.log('load state', ProxyState.toppings)
  }
}