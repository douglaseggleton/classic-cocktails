import { Action } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';

export enum CollectionActionTypes {
  Load = '[Ingredients] Load'
}

export class Load implements Action {
  readonly type = CollectionActionTypes.Load;
  
  constructor(public payload: Ingredient[]) {
  }
}

export type CollectionActionsUnion =
  | Load