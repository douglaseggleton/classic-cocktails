import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromIngredients from './ingredients.reducer';
import * as fromCollection from './collection.reducer';

export interface IngredientsState {
  ingredients: fromIngredients.State;
  collection: fromCollection.State;
}

export const reducers: ActionReducerMap<IngredientsState> = {
  ingredients: fromIngredients.reducer,
  collection: fromCollection.reducer
};

export const getIngredientsState = createFeatureSelector<IngredientsState>('ingredients');

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
  (state: IngredientsState) => state.collection
);

export const getCollectionIngredientIds = createSelector(
  getCollectionState,
  fromCollection.getIds
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
    console.log(selectedIds);
    return selectedIds.map(id => entities[id]);
  }
)