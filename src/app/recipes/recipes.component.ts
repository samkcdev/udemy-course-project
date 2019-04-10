import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe-model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  constructor() {}
  detailStorage: Recipe;
  ngOnInit() {}
  showDetails($event) {
    this.detailStorage = $event;
  }
}
