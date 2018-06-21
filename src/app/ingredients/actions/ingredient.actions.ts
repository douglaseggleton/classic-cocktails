import { Action } from '@ngrx/store';
import { Ingredient } from './../models/ingredient';

export enum ActionTypes {
  ToggleIngredient = '[Ingredient] ToggleIngredient',
  SelectMultipleIngredients = '[Ingredient] SelectMultipleIngredients'
}

export class ToggleIngredient implements Action {
  readonly type = ActionTypes.ToggleIngredient;
  constructor(public payload: Ingredient["id"]) {}
}

export class SelectMultipleIngredients implements Action {
  readonly type = ActionTypes.SelectMultipleIngredients;
  constructor(public payload: Array<Ingredient["id"]>){}
}

export type Actions =
  | ToggleIngredient
  | SelectMultipleIngredients