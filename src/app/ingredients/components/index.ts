import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientListComponent } from './ingredient-list.component';

export const COMPONENTS = [
  IngredientListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}