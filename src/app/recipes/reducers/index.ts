import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRecipes from './recipes.reducer';
import * as fromCollection from './collection.reducer';
import * as fromIngredients from './../../ingredients/reducers';

export interface State {
  recipes: fromRecipes.State;
  collection: fromCollection.State;
}

export const reducers: ActionReducerMap<State> = {
  recipes: fromRecipes.reducer,
  collection: fromCollection.reducer
};

export const getRecipesState = createFeatureSelector<State>('recipes');

export const getRecipeEntitiesState = createSelector(
  getRecipesState,
  state => state.recipes
);

export const {
  selectIds: getRecipeIds,
  selectEntities: getRecipeEntities,
  selectAll: getAllRecipes,
  selectTotal: getTotalRecipes,
} = fromRecipes.adapter.getSelectors(getRecipeEntitiesState);

export const getCollectionState = createSelector(
  getRecipesState,
  (state: State) => state.collection
);

export const getCollectionRecipeIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

export const getRecipeCollection = createSelector(
  getRecipeEntities,
  getCollectionRecipeIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);

export const getAvailableRecipes = createSelector(
  getRecipeCollection,
  fromIngredients.getSelectedIngredientsIds,
  (recipes, selectedIngredientsIds) => {
    return recipes.filter((recipe) => {
      return !!recipe.ingredients.every((ingredient) => {
        return !!~selectedIngredientsIds.indexOf(ingredient.ingredient.id)
      })
    })
  }
);
