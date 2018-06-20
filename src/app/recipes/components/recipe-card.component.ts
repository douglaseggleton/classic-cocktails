import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Recipe } from './../models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {

  @Input() public recipe: Recipe;

}
