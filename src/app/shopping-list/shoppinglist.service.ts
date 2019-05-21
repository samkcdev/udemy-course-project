import { Ingredients } from "../shared/ingredients-model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  changeInIngredients = new EventEmitter<Ingredients[]>();
  ingredients: Ingredients[] = [
    new Ingredients("Ginger", 100),
    new Ingredients("Garlic", 200)
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(newingredients: Ingredients) {
    this.ingredients.push(newingredients);
    this.changeInIngredients.emit(this.ingredients.slice());
  }
}
