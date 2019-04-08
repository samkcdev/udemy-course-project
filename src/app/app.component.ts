import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  linkId = 1;
  onRecipes(linkClicked: number) {
    this.linkId = linkClicked;
  }
}
