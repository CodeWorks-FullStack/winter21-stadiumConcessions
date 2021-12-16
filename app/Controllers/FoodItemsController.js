import { ProxyState } from "../AppState.js";
import { foodItemForm } from "../Components/FoodItemForm.js";
import { foodItemsService } from "../Services/FoodItemsService.js";
import { loadState } from "../Utils/LocalStorage.js";


function _drawFoodItems() {
  let template = ''
  ProxyState.foodItems.forEach(f => template += f.Template)
  document.getElementById('foodItems').innerHTML = template
}

function _drawFoodItemForm() {
  document.getElementById('modal-body-slot').innerHTML = foodItemForm()
}

export class FoodItemsController {
  constructor() {
    ProxyState.on('foodItems', _drawFoodItems)
    ProxyState.on('toppings', _drawFoodItems)
    _drawFoodItems()
  }

  createFoodItem() {
    window.event.preventDefault()
    let form = window.event.target
    const newFoodItem = {
      customerName: form.customerName.value,
      type: form.type.value,
      quantity: form.quantity.value
    }
    console.log('new food item', newFoodItem)
    foodItemsService.createFoodItem(newFoodItem)

    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('foodItemModal')).toggle()
  }

  deleteFoodItem(foodItemId) {
    console.log('food item id', foodItemId);
    foodItemsService.deleteFoodItem(foodItemId)
  }

  drawFoodItemForm() {
    _drawFoodItemForm()
  }
}