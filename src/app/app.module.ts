import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

import { Store, StoreModule } from '@ngrx/store';
import { ingredients, SET_INGREDIENTS } from './store/ingredients.reducer';
import { cocktails, SET_RECIPES } from './store/cocktails.reducer';
import { IAppState } from './store/interfaces';

import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';

import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';


@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 
      ingredients,
      cocktails
     }
    ),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(apollo: Apollo, httpLink: HttpLink, private _store: Store<IAppState>) {
    apollo.create({
      link: httpLink.create({uri: 'https://api.graph.cool/simple/v1/cjihgfr1t3d640164357p9sse'}),
      cache: new InMemoryCache(),
    });

    const query = gql`
      query {
        allIngredients {
          id
          name
        }
        allRecipes {
          id
          name
          ingredients {
            ingredient {
              id
              name
            }
            measure
          }
        }
      }`

    apollo.query({
      query
    }).subscribe(({data, loading}: any) => {
      this._store.dispatch({
        type: SET_INGREDIENTS,
        payload: data.allIngredients
      })
      this._store.dispatch({
        type: SET_RECIPES,
        payload: data.allRecipes
      })
    })
  }

}
