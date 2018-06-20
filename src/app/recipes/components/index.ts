import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCardComponent } from './recipe-card.component';
import { RecipeListComponent } from './recipe-list.component';

export const COMPONENTS = [
  RecipeCardComponent,
  RecipeListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}