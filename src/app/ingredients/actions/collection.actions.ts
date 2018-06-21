import { Action } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';

export enum CollectionActionTypes {
  SetIngredients = '[IngredientCollection] SetIngredients'
}

export class SetIngredients implements Action {
  readonly type = CollectionActionTypes.SetIngredients;
  constructor(public payload: Ingredient[]) {}
}

export type CollectionActions =
  | SetIngredients