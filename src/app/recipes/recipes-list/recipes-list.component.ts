import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe-model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  @Output() selectedRecipes = new EventEmitter<Recipe>();
  recipe: Recipe[] = [
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
  constructor() {}

  ngOnInit() {}
  showMeDetails(recipe: Recipe) {
    this.selectedRecipes.emit(recipe);
  }
}
