export interface Recipe {
	title: string;
	_id?: string;
	description: string;
	image: string;
	ingredients: Ingredient[];
}

export interface Ingredient {
	name: string;
	amount: string;
	unit: string;
}
