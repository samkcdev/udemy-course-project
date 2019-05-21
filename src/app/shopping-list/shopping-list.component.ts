import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../shared/ingredients-model";
import { ShoppingListService } from "./shoppinglist.service";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  constructor(private shoppingserices: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingserices.getAllIngredients();
    this.shoppingserices.changeInIngredients.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
