import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IIngredient, IRecipe, IMeasure, IAppState } from '../store/interfaces';
import { TOGGLE_INGREDIENT } from './../store/ingredients.reducer';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnChanges {

  @Input() public ingredients: Array<IIngredient>;
  @Input() public cocktails: Array<IRecipe>;

  public availableCocktails: Array<IRecipe>;
  public availableIngredientIds: Array<IIngredient["id"]>;

  constructor(private _store: Store<IAppState>, private _apollo: Apollo) { }

  public ngOnChanges() {
    this.availableIngredientIds = this.ingredients
      .filter((ingredient: IIngredient) => ingredient.selected)
      .map((ingredient) => ingredient.id);
    this.availableCocktails = this.cocktails.filter((recipe) => {
      return recipe.ingredients.every((measure: any) => {
        return this.availableIngredientIds.includes(measure.ingredient.id);
      });
    });
  }

  public toggleIngredient(ingredient: IIngredient) {
    this._store.dispatch({
      type: TOGGLE_INGREDIENT,
      payload: ingredient
    })
  }
}