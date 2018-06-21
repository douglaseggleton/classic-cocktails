import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IngredientListComponent],
  exports: [IngredientListComponent],
})
export class ComponentsModule {}