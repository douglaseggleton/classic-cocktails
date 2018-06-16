
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const TOGGLE_INGREDIENT = "TOGGLE_INGREDIENT";
export const SET_INGREDIENTS = "SET_INGREDIENTS";

export const ingredients = (state = [], action) => {
    switch(action.type){
      case ADD_INGREDIENT:
        return [
          ...state,
          Object.assign({}, {
            id: action.payload.id,
            name: action.payload.name
          })
        ]
      case SET_INGREDIENTS:
        return action.payload
      case TOGGLE_INGREDIENT:
        return state.map((ingredient) => {
          let selectedState = ingredient.selected;
          if (ingredient.name === action.payload.name) {
            selectedState = !ingredient.selected;
          }
          return Object.assign({}, {
            id: ingredient.id,
            name: ingredient.name,
            selected: selectedState
          });
        });
      default:
        return state;
    }
  }