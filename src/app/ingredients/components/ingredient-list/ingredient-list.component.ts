import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Ingredient } from './../../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientListComponent {

  @Input() public ingredients: Array<Ingredient>;

  @Output() public selected: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

}