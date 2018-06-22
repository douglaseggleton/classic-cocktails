import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { adapter, State } from './../reducers';

export const getIngredientsState = createFeatureSelector<State>('ingredients');

export const {
  selectIds: getIngredientIds,
  selectEntities: getIngredientEntities,
  selectAll: getAllIngredients,
  selectTotal: getTotalIngredients,
} = adapter.getSelectors(getIngredientsState);

export const getSelectedIngredientsIds = createSelector(
  getIngredientsState,
  state => [...state.selected]
)

export const getSelectedIngredients = createSelector(
  getIngredientEntities,
  getSelectedIngredientsIds,
  (entities, selectedIds) => {
    return selectedIds.map(id => entities[id]);
  }
)

export const getIngredients = createSelector(
  getIngredientIds,
  getIngredientEntities,
  getSelectedIngredientsIds,
  (ids: Array<string>, entities, selectedIds) => {
    return ids.map(id => {
      return {
        ...entities[id],
        selected: !!~selectedIds.indexOf(id)
      }
    });
  }
);