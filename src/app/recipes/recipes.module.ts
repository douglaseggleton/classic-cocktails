import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from './components';

import { reducers } from './reducers';
import { RecipeCardComponent } from './components/recipe-card.component';
import { RecipeListComponent } from './components/recipe-list.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature('recipes', reducers)
  ],
  exports: [
    RecipeCardComponent,
    RecipeListComponent
  ]
})
export class RecipesModule {}