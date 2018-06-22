import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from './components';
import { reducer } from './reducers/ingredients.reducer';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature('ingredients', reducer)
  ],
  exports: [
    IngredientListComponent
  ]
})
export class IngredientsModule {}