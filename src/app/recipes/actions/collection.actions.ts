import { Action } from '@ngrx/store';
import { Recipe } from '../models/recipe';

export enum CollectionActionTypes {
  SetRecipes = '[Recipes] SetRecipes'
}

export class SetRecipes implements Action {
  readonly type = CollectionActionTypes.SetRecipes;
  constructor(public payload: Recipe[]) {}
}

export type CollectionActions =
  | SetRecipes