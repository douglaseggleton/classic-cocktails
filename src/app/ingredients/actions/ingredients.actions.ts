import { Action } from '@ngrx/store';
import { Ingredient } from './../models';

export enum ActionTypes {
  ToggleIngredient = '[Ingredient] ToggleIngredient',
  SelectMultipleIngredients = '[Ingredient] SelectMultipleIngredients',
  SetIngredients = '[Ingredient] SetIngredients'
}

export class ToggleIngredient implements Action {
  readonly type = ActionTypes.ToggleIngredient;
  constructor(public payload: Ingredient["id"]) {}
}

export class SelectMultipleIngredients implements Action {
  readonly type = ActionTypes.SelectMultipleIngredients;
  constructor(public payload: Array<Ingredient["id"]>){}
}

export class SetIngredients implements Action {
  readonly type = ActionTypes.SetIngredients;
  constructor(public payload: Ingredient[]) {}
}

export type Actions =
  | ToggleIngredient
  | SelectMultipleIngredients
  | SetIngredients
