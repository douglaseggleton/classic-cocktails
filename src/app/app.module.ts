import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { IAppState } from './store/interfaces';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IngredientsModule  } from './ingredients/ingredients.module';
import { CollectionActionTypes as IngredientsCollectionActionTypes } from './ingredients/actions/collection.actions';
import { CollectionActionTypes as RecipesCollectionActionTypes } from './recipes/actions/collection.actions';
import { RecipesModule } from './recipes/recipes.module';
import gql from 'graphql-tag';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    IngredientsModule,
    RecipesModule
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
        type: IngredientsCollectionActionTypes.Load,
        payload: data.allIngredients
      })
      this._store.dispatch({
        type: RecipesCollectionActionTypes.Load,
        payload: data.allRecipes
      })
    })
  }

}
