import { Action } from '@ngrx/store';
import { Recipe } from '../models/recipe';

export enum CollectionActionTypes {
  Load = '[Recipes] Load'
}

export class Load implements Action {
  readonly type = CollectionActionTypes.Load;
  
  constructor(public payload: Recipe[]) {
  }
}

export type CollectionActionsUnion =
  | Load