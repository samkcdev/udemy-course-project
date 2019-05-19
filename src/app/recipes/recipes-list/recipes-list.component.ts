import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe-model";
import { RecipeService } from "./../recipe.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  @Output() selectedRecipes = new EventEmitter<Recipe>();
  recipe: Recipe[];
  constructor(private recipeservice: RecipeService) {}

  ngOnInit() {
    this.recipe = this.recipeservice.getRecipeItems();
  }
}
