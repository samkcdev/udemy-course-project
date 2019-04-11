import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredients } from "src/app/shared/ingredients-model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("ingredientNameInput") ingredientNameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  @Output() addingIngredients = new EventEmitter<Ingredients>();

  ingredientNameInputValue: any;
  amtInputValue: any;

  constructor() {}

  ngOnInit() {}

  addIngredient() {
    const nameIng = this.ingredientNameInput.nativeElement.value;
    const amtIng = this.amountInput.nativeElement.value;
    const newIng = new Ingredients(nameIng, amtIng);
    this.addingIngredients.emit(newIng);
  }
}
