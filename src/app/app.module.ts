import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, RootAppState } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IngredientsModule  } from './ingredients/ingredients.module';
import { ActionTypes as IngredientActionTypes } from './ingredients/actions';
import { ActionTypes as RecipeCollectionActionTypes } from './recipes/actions';
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

  constructor(apollo: Apollo, httpLink: HttpLink, private store: Store<RootAppState>) {
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
      this.store.dispatch({
        type: IngredientActionTypes.SetIngredients,
        payload: data.allIngredients
      })
      this.store.dispatch({
        type: RecipeCollectionActionTypes.SetRecipes,
        payload: data.allRecipes
      })
    })
  }

}
