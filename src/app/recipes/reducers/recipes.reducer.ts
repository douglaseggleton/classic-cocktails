import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Recipe } from './../models/recipe';
import { Actions, ActionTypes } from '../actions/recipes.actions';

export interface State extends EntityState<Recipe> {}

export const adapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>({});

export const initialState: State = adapter.getInitialState({});

export function reducer(
  state = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionTypes.SetRecipes: {
      return adapter.addMany(action.payload, {
        ...state
      });
    }
    default: {
      return state;
    }
  }
}