import { createSelector, createFeatureSelector } from '@ngrx/store';
import { adapter, State } from './../reducers';
import { getSelectedIngredientsIds } from './../../ingredients/selectors';


export const getRecipesState = createFeatureSelector<State>('recipes');

export const {
  selectIds: getRecipeIds,
  selectEntities: getRecipeEntities,
  selectAll: getAllRecipes,
  selectTotal: getTotalRecipes,
} = adapter.getSelectors(getRecipesState);

export const getRecipeCollection = createSelector(
  getRecipeEntities,
  getRecipeIds,
  (entities, ids: Array<string>) => {
    return ids.map(id => entities[id]);
  }
);

export const getAvailableRecipes = createSelector(
  getRecipeCollection,
  getSelectedIngredientsIds,
  (recipes, selectedIngredientsIds) => {
    return recipes.filter((recipe) => {
      return !!recipe.ingredients.every((ingredient) => {
        return !!~selectedIngredientsIds.indexOf(ingredient.ingredient.id)
      })
    })
  }
);