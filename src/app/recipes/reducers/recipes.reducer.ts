import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Recipe } from './../models/recipe';
import { CollectionActionsUnion, CollectionActionTypes } from './../actions/collection.actions';

export interface State extends EntityState<Recipe> {}

export const adapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>({});

export const initialState: State = adapter.getInitialState({
  recipes: []
});

export function reducer(
  state = initialState,
  action: CollectionActionsUnion
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      return adapter.addMany(action.payload, {
        ...state
      });
    }
    default: {
      return state;
    }
  }
}
