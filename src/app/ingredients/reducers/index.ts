import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromIngredients from './ingredients.reducer';
import * as fromCollection from './collection.reducer';

export interface State {
  ingredients: fromIngredients.State;
  collection: fromCollection.State;
}

export const reducers: ActionReducerMap<State> = {
  ingredients: fromIngredients.reducer,
  collection: fromCollection.reducer
};

export const getIngredientsState = createFeatureSelector<State>('ingredients');

export const getIngredientEntitiesState = createSelector(
  getIngredientsState,
  state => state.ingredients
);

export const {
  selectIds: getIngredientIds,
  selectEntities: getIngredientEntities,
  selectAll: getAllIngredients,
  selectTotal: getTotalIngredients,
} = fromIngredients.adapter.getSelectors(getIngredientEntitiesState);

export const getCollectionState = createSelector(
  getIngredientsState,
  (state: State) => state.collection
);

export const getCollectionIngredientIds = createSelector(
  getCollectionState,
  (state: fromCollection.State) => state.ids
);

export const getSelectedIngredientsIds = createSelector(
  getIngredientsState,
  state => [...state.ingredients.selected]
)

export const getIngredientCollection = createSelector(
  getIngredientEntities,
  getCollectionIngredientIds,
  getSelectedIngredientsIds,
  (entities, ids, selectedIds) => {
    return ids.map(id => {
      return {
        ...entities[id],
        selected: !!~selectedIds.indexOf(id)
      }
    });
  }
);

export const getSelectedIngredientCollection = createSelector(
  getIngredientEntities,
  getSelectedIngredientsIds,
  (entities, selectedIds) => {
    return selectedIds.map(id => entities[id]);
  }
)