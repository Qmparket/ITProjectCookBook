import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe, Ingredient } from '../models/recipe.model';
import { HttpMethod } from 'blocking-proxy/built/lib/webdriver_commands';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	url = 'http://localhost:3000/api/recipes';
	constructor(private http: HttpClient) {}

	getRecipes(): Observable<any> {
		return this.http.get(this.url, { observe: 'body' });
	}

	createNewRecipe(recipe: Recipe): Observable<any> {
		return this.http.post(this.url, recipe, { observe: 'response' });
	}

	deleteRecipe(recipeId: string): Observable<any> {
		return this.http.delete(this.url + '/' + recipeId, { observe: 'response' });
	}

	addNewIngredient(recipeId: string, ingredients: Ingredient[]): Observable<any> {
		return this.http.put(this.url + '/ingredients/' + recipeId, { ingredients }, { observe: 'response' });
	}
}
