import {
  CollectionActionTypes,
  CollectionActionsUnion,
} from './../actions/collection.actions';

export interface State {
  ids: Array<string>;
}

const initialState: State = {
  ids: []
};

export function reducer(
  state = initialState,
  action: CollectionActionsUnion
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
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