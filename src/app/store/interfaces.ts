export interface IIngredient {
    name: string;
    id: any;
    selected: boolean;
  }
  
export interface IRecipe {
  id: string;
  name: string;
  ingredients: [IMeasure]
}

export interface IMeasure {
  ingredient: IIngredient;
  measure: string;
}

export interface IDrink {
    name: string;
  }
  
export interface IAppState {
    ingredients: Array<IIngredient>;
    cocktails: Array<IRecipe>
  }