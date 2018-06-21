import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ingredient } from './../models/ingredient';
import { IngredientActionsUnion, IngredientActionTypes } from './../actions/ingredient.actions';
import { CollectionActionsUnion, CollectionActionTypes } from './../actions/collection.actions';

export interface State extends EntityState<Ingredient> {
  selected: Array<Ingredient["id"]>
}

export const adapter: EntityAdapter<Ingredient> = createEntityAdapter<Ingredient>({});

export const initialState: State = adapter.getInitialState({
  selected: []
});

export function reducer(
  state = initialState,
  action: IngredientActionsUnion | CollectionActionsUnion
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      return adapter.addMany(action.payload, {
        ...state
      });
    }
    case IngredientActionTypes.Toggle:
      const selected = state.selected;
      const index = state.selected.indexOf(action.payload);
      index === -1 ? state.selected.push(action.payload) : state.selected.splice(index, 1);
      return {
        ...state,
        selected
      }
    case IngredientActionTypes.SelectMultiple:
      return {
        ...state,
        selected: action.payload
      }
    default: {
      return state;
    }
  }
}
