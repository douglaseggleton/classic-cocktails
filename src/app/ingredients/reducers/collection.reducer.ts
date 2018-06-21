import { CollectionActionTypes, CollectionActions } from '../actions/collection.actions';

export interface State {
  ids: Array<string>;
}

const initialState: State = {
  ids: [],
};

export function reducer(
  state = initialState,
  action: CollectionActions
): State {
  switch (action.type) {
    case CollectionActionTypes.SetIngredients: {
      return {
        ids: action.payload.map(ingredient => ingredient.id)
      };
    }
    default: {
      return state;
    }
  }
}