import * as fromCollection from '../actions/collection.actions';

export interface State {
  ids: Array<string>;
}

const initialState: State = {
  ids: []
};

export function reducer(
  state = initialState,
  action: fromCollection.CollectionActions
): State {
  switch (action.type) {
    case fromCollection.CollectionActionTypes.SetRecipes: {
      return {
        ids: action.payload.map(recipe => recipe.id)
      };
    }
    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;