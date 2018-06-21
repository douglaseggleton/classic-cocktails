import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// Recipe Imports
import { Recipe } from './recipes/models/recipe';
import * as fromRecipes from './recipes/reducers';

// Ingredient Imports
import { Ingredient } from './ingredients/models/ingredient';
import * as fromIngredients from './ingredients/reducers';
import { ActionTypes as IngredientActionTypes } from './ingredients/actions/ingredient.actions';

export interface RootAppState {
  ingredients: fromIngredients.State;
  recipes: fromRecipes.State
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public ingredients$: Observable<Array<Ingredient>>;
  public recipes$: Observable<Array<Recipe>>;
  public selectedIngredients$: Observable<Array<Ingredient>>;

  constructor(private store: Store<RootAppState>) {
    this.recipes$ = store.pipe(select(fromRecipes.getAvailableRecipes));
    this.ingredients$ = store.pipe(select(fromIngredients.getIngredientCollection));
  }

  public selectIngredient(ingredient: Ingredient) {
    this.store.dispatch({
      type: IngredientActionTypes.ToggleIngredient,
      payload: ingredient.id
    })
  }

  public randomize() {
    this.store.pipe(select(fromRecipes.getAllRecipes)).subscribe((recipes) => {
      const ingredients: Array<Ingredient["id"]> = recipes[Math.floor(Math.random()*recipes.length)].ingredients.map((ingredient) => {
        return ingredient.ingredient.id;
      })
      this.store.dispatch({
        type: IngredientActionTypes.SelectMultipleIngredients,
        payload: ingredients
      });
    }).unsubscribe();
   
  }
}