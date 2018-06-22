import { reducer } from './ingredients.reducer';
import { ToggleIngredient, ActionTypes, SelectMultipleIngredients, SetIngredients } from './../actions';

describe('IngredientsReducer', () => {
  describe(ActionTypes.ToggleIngredient, () => {
    it('should add the selected id', () => {
      expect(reducer({
        selected: [],
        ids: [],
        entities: {}
      }, new ToggleIngredient('1'))).toEqual({
        selected: ['1'],
        ids: [],
        entities: {}
      });
    });
  
    it('should remove the selected id', () => {
      expect(reducer({
        selected: ['2'],
        ids: [],
        entities: {}
      }, new ToggleIngredient('2'))).toEqual({
        selected: [],
        ids: [],
        entities: {}
      });
    });
  });

  describe(ActionTypes.SelectMultipleIngredients, () => {
    it('should set the list of selected ingredients', () => {
      expect(reducer({
        selected: ['1', '2', '3'],
        ids: [],
        entities: {}
      }, new SelectMultipleIngredients(['5', '6', '7']))).toEqual({
        selected: ['5', '6', '7'],
        ids: [],
        entities: {}
      });
    });
  });

  describe(ActionTypes.SetIngredients, () => {
    it('should add the selected id', () => {
      const testIngredient = {
        id: '1',
        name: 'test ingredient'
      };
      expect(reducer({
        selected: [],
        ids: [],
        entities: {}
      }, new SetIngredients([testIngredient]))).toEqual({
        ids: ['1'],
        entities: {
          "1": { id: '1', name: 'test ingredient' }
        },
        selected: []
      });
    });
  });
});