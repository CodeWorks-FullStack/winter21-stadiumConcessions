

export function foodItemForm() {
  return /*html*/ `
  <form onsubmit="app.foodItemsController.createFoodItem()">
    <div class="form-group">
      <input type="text" name="customerName" class="form-control" placeholder="Name..." minlength="4"
        maxlength="50" required>
    </div>
    <div class="form-group mt-2">
      <input type="text" name="type" class="form-control" placeholder="Type..." required minlength="4"
        maxlength="50">
    </div>
    <div class="form-group mt-2">
      <input type="number" name="quantity" class="form-control" placeholder="Quantity..." required min="1"
        max="20">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button class="btn btn-success">Submit Order</button>
    </div>
  </form>
  `
}