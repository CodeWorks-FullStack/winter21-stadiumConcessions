import { generateId } from "../Utils/generateId.js"


export class Topping {
  constructor(data) {
    this.name = data.name
    this.id = generateId()
    this.foodItemId = data.foodItemId
    this.price = 13.75
  }

  get Template() {
    return /*html*/ `
    <li>${this.name} - ${this.price}</li>
    `
  }
}