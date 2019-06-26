import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: [ './recipes.component.scss' ]
})
export class RecipesComponent implements OnInit {
	recipes: Recipe[] = [];
	addNewRecipeOpen = false;

	newRecipeTitle = '';
	newRecipeDescription = '';
	newRecipeImage = '';
	constructor(private router: Router, private recipeService: RecipeService) {}
	ngOnInit() {
		this.loadRecipes();
	}

	loadRecipes() {
		this.recipeService.getRecipes().subscribe((res) => {
			this.recipes = res;
		});
	}

	openRecipe(recipe: Recipe) {
		this.router.navigate([ '/recipe', { recipe: JSON.stringify(recipe) } ]);
		console.log(recipe);
	}

	deleteRecipe(recipe: Recipe) {
		this.recipeService.deleteRecipe(recipe._id).subscribe((res) => {
			if (res.status == 200) {
				const index = this.recipes.indexOf(recipe);
				this.recipes.splice(index, 1);
			}
		});
	}

	addNewRecipe() {
		this.addNewRecipeOpen = true;
	}
	onNewRecipeSave() {
		const recipe: Recipe = {
			title: this.newRecipeTitle,
			description: this.newRecipeDescription,
			image: this.newRecipeImage,
			ingredients: []
		};
		this.newRecipeDescription = '';
		this.newRecipeImage = '';
		this.newRecipeTitle = '';
		this.recipeService.createNewRecipe(recipe).subscribe((res) => {
			if (res.status == 201) {
				this.loadRecipes();
				this.addNewRecipeOpen = false;
			}
		});
	}
}
