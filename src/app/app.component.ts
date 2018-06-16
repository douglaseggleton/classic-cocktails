import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, IIngredient, IRecipe } from './store/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public ingredients: Observable<Array<IIngredient>>;
  public cocktails: Observable<Array<IRecipe>>;

  constructor(private store: Store<IAppState>) {
    this.ingredients = store.select('ingredients');
    this.cocktails = store.select('cocktails');
  }
}
