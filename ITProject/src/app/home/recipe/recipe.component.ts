import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, Ingredient } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: [ './recipe.component.scss' ]
})
export class RecipeComponent implements OnInit {
	recipe: Recipe;
	addNewIngredientOpen = false;
	constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService) {}
	newIngredientName = '';
	newIngredientAmount = '';
	newIngredientUnit = '';
	isIngredientNew = false;
	currentIngredientIndexEdit;
	units = [
		{ label: 'gram(s)', value: 'gram(s)' },
		{ label: 'mil(s)', value: 'mil(s)' },
		{ label: 'kg(s)', value: 'kg(s)' },
		{ label: 'glove(s)', value: 'glove(s)' },
		{ label: 'cup(s)', value: 'cup(s)' },
		{ label: '-', value: '' }
	];

	ngOnInit() {
		this.recipe = JSON.parse(this.activeRoute.snapshot.params['recipe']);
		console.log('Log output: RecipeComponent -> ngOnInit -> recipe', this.recipe);
	}

	onNewIngredientSave() {
		const ingredient: Ingredient = {
			name: this.newIngredientName,
			amount: this.newIngredientAmount,
			unit: this.newIngredientUnit
		};
		this.saveIngredient(ingredient);
	}

	saveIngredient(ingredient) {
		debugger;
		let ingredients = this.recipe.ingredients;
		if (this.isIngredientNew) {
			if (!ingredients) {
				ingredients = [ ingredient ];
			} else {
				ingredients.push(ingredient);
			}
		} else {
			this.recipe.ingredients[this.currentIngredientIndexEdit] = ingredient;
			ingredients = this.recipe.ingredients;
		}

		this.recipeService.addNewIngredient(this.recipe._id, ingredients).subscribe((res) => {
			if (res.status == 200) {
				this.recipe.ingredients = ingredients;
				this.addNewIngredientOpen = false;
				this.newIngredientAmount = '';
				this.newIngredientName = '';
				this.newIngredientUnit = '';
			}
		});
	}

	editIngredient(ingredient: Ingredient, index) {
		this.newIngredientName = ingredient.name;
		this.newIngredientAmount = ingredient.amount;
		this.newIngredientUnit = ingredient.unit;
		this.isIngredientNew = false;
		this.currentIngredientIndexEdit = index;
		this.addNewIngredientOpen = true;
	}

	deleteIngredient(ingredient: Ingredient, index) {
		const ingredients = this.recipe.ingredients;
		ingredients.splice(index, 1);
		this.recipeService.addNewIngredient(this.recipe._id, ingredients).subscribe((res) => {
			if (res.status == 200) {
				this.recipe.ingredients = ingredients;
			}
		});
	}
}
