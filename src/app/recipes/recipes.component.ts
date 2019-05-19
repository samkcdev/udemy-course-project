import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe-model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeservice: RecipeService) {}

  detailStorage: Recipe;
  ngOnInit() {
    this.recipeservice.selectedRecipe.subscribe((recipe: Recipe) => {
      this.detailStorage = recipe;
    });
  }
}
