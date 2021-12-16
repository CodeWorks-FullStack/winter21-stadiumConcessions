import { toppingService } from "../Services/ToppingsService.js";


export class ToppingsController {
  constructor() {
    console.log('hellor from the toppings');
  }

  createTopping(foodItemId) {
    window.event.preventDefault()
    let form = window.event.target
    const newTopping = {
      name: form.name.value,
      foodItemId: foodItemId
    }
    toppingService.createTopping(newTopping)
    console.log('food item obj', newTopping);
  }
}