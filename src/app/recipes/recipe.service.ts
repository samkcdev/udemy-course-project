import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-model";

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Avial",
      "Recipe for Avial-Kerala Special",
      "https://myheartbeets.com/wp-content/uploads/2018/06/instant-pot-avial.jpg"
    ),
    new Recipe(
      "Kichidi",
      "Recipe for Kichidi",
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/12/khichdi-recipe-1.jpg"
    )
  ];

  getRecipeItems() {
    return this.recipes.slice();
  }
}
