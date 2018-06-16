import { TOGGLE_INGREDIENT } from './ingredients.reducer';

export const SET_RECIPES = "SET_RECIPES";

export const cocktails = (state = [], action) => {
    switch(action.type){
      case SET_RECIPES:
        return action.payload
      default:
        return state;
    }
  }