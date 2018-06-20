import { Action } from '@ngrx/store';
import { Ingredient } from './../models/ingredient';

export enum IngredientActionTypes {
  Toggle = '[Ingredient] Toggle'
}

export class Toggle implements Action {
  readonly type = IngredientActionTypes.Toggle;

  constructor(public payload: Ingredient["id"]) {
  }
}

export type IngredientActionsUnion =
  | Toggle