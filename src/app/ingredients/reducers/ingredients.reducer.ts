import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ingredient } from './../models';
import { Actions, ActionTypes } from './../actions';

export interface State extends EntityState<Ingredient> {
  selected: Array<Ingredient["id"]>
  ids: Array<Ingredient["id"]>
}

export const adapter: EntityAdapter<Ingredient> = createEntityAdapter<Ingredient>({});

export const initialState: State = adapter.getInitialState({
  selected: [],
  ids: []
});

export function reducer(
  state = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionTypes.SetIngredients:
      return adapter.addMany(action.payload, {
        ...state
      });
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
    case ActionTypes.SetIngredients: {
      return {
        ...state,
        ids: action.payload.map(ingredient => ingredient.id)
      };
    }
    default: {
      return state;
    }
  }
}