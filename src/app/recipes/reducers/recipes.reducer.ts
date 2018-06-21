import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Recipe } from './../models/recipe';
import { CollectionActions, CollectionActionTypes } from '../actions/collection.actions';

export interface State extends EntityState<Recipe> {}

export const adapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>({});

export const initialState: State = adapter.getInitialState({
  recipes: []
});

export function reducer(
  state = initialState,
  action: CollectionActions
): State {
  switch (action.type) {
    case CollectionActionTypes.SetRecipes: {
      return adapter.addMany(action.payload, {
        ...state
      });
    }
    default: {
      return state;
    }
  }
}
