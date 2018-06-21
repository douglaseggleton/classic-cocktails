import { Action } from '@ngrx/store';
import { Ingredient } from './../models/ingredient';

export enum IngredientActionTypes {
  Toggle = '[Ingredient] Toggle',
  SelectMultiple = '[Ingredient] SelectMultiple'
}

export class Toggle implements Action {
  readonly type = IngredientActionTypes.Toggle;

  constructor(public payload: Ingredient["id"]) {
  }
}

export class SelectMultiple implements Action {
  readonly type = IngredientActionTypes.SelectMultiple;

  constructor(public payload: Array<Ingredient["id"]>){
  }
}

export type IngredientActionsUnion =
  | Toggle
  | SelectMultiple