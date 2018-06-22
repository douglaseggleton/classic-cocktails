import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from './components';

import { reducer } from './reducers';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature('recipes', reducer)
  ],
  exports: [
    RecipeCardComponent,
    RecipeListComponent
  ]
})
export class RecipesModule {}