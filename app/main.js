import { FoodItemsController } from "./Controllers/FoodItemsController.js";
import { ToppingsController } from "./Controllers/ToppingsController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {

  // REGISTER CONTROLLERS HERE
  foodItemsController = new FoodItemsController()
  toppingsController = new ToppingsController()
}

loadState()

window["app"] = new App();
