import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ingredient } from './../models/ingredient';
import { Actions, ActionTypes } from './../actions/ingredient.actions';
import { CollectionActions, CollectionActionTypes } from '../actions/collection.actions';

export interface State extends EntityState<Ingredient> {
  selected: Array<Ingredient["id"]>
}

export const adapter: EntityAdapter<Ingredient> = createEntityAdapter<Ingredient>({});

export const initialState: State = adapter.getInitialState({
  selected: []
});

export function reducer(
  state = initialState,
  action: Actions | CollectionActions
): State {
  switch (action.type) {
    case CollectionActionTypes.SetIngredients: {
      return adapter.addMany(action.payload, {
        ...state
      });
    }
    case ActionTypes.ToggleIngredient:
      const selected = state.selected;
      const index = state.selected.indexOf(action.payload);
      index === -1 ? state.selected.push(action.payload) : state.selected.splice(index, 1);
      return {
        ...state,
        selected
      }
    case ActionTypes.SelectMultipleIngredients:
      return {
        ...state,
        selected: action.payload
      }
    default: {
      return state;
    }
  }
}
