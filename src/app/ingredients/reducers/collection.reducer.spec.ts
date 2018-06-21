import { reducer } from './collection.reducer';
import { CollectionActionTypes, SetIngredients} from '../actions/collection.actions';

const testIngredient = {
  id: '1',
  name: 'test ingredient'
};

describe('IngredientCollectionReducer', () => {
  describe(CollectionActionTypes.SetIngredients, () => {
    it('should add the selected id', () => {
      expect(reducer({
        ids: [],
      }, new SetIngredients([testIngredient]))).toEqual({
        ids: ['1']
      });
    });
  });
});