import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../shared/ingredients-model";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients("Ginger", 100),
    new Ingredients("Garlic", 200)
  ];
  constructor() {}

  ngOnInit() {}
  shoppingList(newingredients: Ingredients) {
    this.ingredients.push(newingredients);
  }
}
