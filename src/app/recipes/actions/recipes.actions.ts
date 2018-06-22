import { Action } from '@ngrx/store';
import { Recipe } from '../models/recipe';

export enum ActionTypes {
  SetRecipes = '[Recipes] SetRecipes'
}

export class SetRecipes implements Action {
  readonly type = ActionTypes.SetRecipes;
  constructor(public payload: Recipe[]) {}
}

export type Actions =
  | SetRecipes