import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Output() navLinkRecipe = new EventEmitter<number>();

  openRecipes(linkId: number) {
    this.navLinkRecipe.emit(linkId);
  }
  openShoppingList(linkId: number) {
    this.navLinkRecipe.emit(linkId);
  }
}
