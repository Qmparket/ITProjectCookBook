import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './home/recipes/recipes.component';
import { RecipeComponent } from './home/recipe/recipe.component';

const routes: Routes = [ { path: '', component: RecipesComponent }, { path: 'recipe', component: RecipeComponent } ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
