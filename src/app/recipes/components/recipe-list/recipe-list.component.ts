import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Recipe } from './../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {

  @Input() public recipes: Recipe[];

}
