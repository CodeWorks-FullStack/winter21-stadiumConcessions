import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



// FoodItem is going to be considered the 'parent' of the toppings
export class FoodItem {
  constructor(data) {
    this.type = data.type
    this.customerName = data.customerName
    this.quantity = data.quantity
    this.price = 15.00
    this.id = data.id || generateId()
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-4 mt-3">
      <div class="bg-light rounded shadow">
        <div class="row p-3">
          <div class="col-12">
            <h4>Customer Name: ${this.customerName}</h4>
            <div class="d-flex justify-content-between">
              <p>x${this.quantity}: ${this.type}</p>
              <i class="mdi mdi-delete mdi-24px selectable text-danger" onclick="app.foodItemsController.deleteFoodItem('${this.id}')"></i>
            </div>
          </div>
          <div class="col-12 mt-2">
            <h6>Toppings: </h6>
              <ul>
              ${this.Toppings}
              </ul>
              <form onsubmit="app.toppingsController.createTopping('${this.id}')">
                <div class="form-group d-flex">
                  <!-- Input field for toppings -->
                  <input type="text" name="name" class="form-control" placeholder="Toppings....">
                  <button class="btn btn-success">+</button>
                </div>
            </form>
          </div>
        </div>
      </div>
   </div>
    `
  }

  get Toppings() {
    let template = ''
    let foundToppings = ProxyState.toppings.filter(t => t.foodItemId == this.id)
    foundToppings.forEach(t => template += t.Template)
    console.log('found toppings', foundToppings)
    return template
  }
}