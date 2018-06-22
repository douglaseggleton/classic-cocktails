import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IngredientListComponent } from './ingredient-list.component';
import { DebugElement } from '@angular/core';
import { Ingredient } from '../../models';

const testIngredients = [{
  name: 'Lime',
  id: '1',
}, {
  name: 'Lemon',
  id: '2'
}];

describe('IngredientListComponent', () => {
  let component: IngredientListComponent;
  let fixture: ComponentFixture<IngredientListComponent>;
  let ingredientElements: Array<DebugElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientListComponent);
    component = fixture.componentInstance;
    component.ingredients = testIngredients;
    fixture.detectChanges();

    ingredientElements = fixture.debugElement.queryAll(
      By.css('.ingredients div'));
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display the list of ingredients', () => {
    expect(ingredientElements.length).toBe(2);
    expect(ingredientElements[0].nativeElement.textContent).toContain('Lime');
    expect(ingredientElements[1].nativeElement.textContent).toContain('Lemon');
  });

  describe('selecting an ingredient', () => {
    it('should emit a selected ingredient event', async() => {
      let ingredient: Ingredient;
      component.selected.subscribe((event) => ingredient = event);
      ingredientElements[0].triggerEventHandler('click', {});
      expect(ingredient).toBe(testIngredients[0]);
    });
  });
});