const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Recipes
router.get('/', async (req, res) => {
	const recipes = await loadRecipesCollection();
	res.send(await recipes.find({}).toArray());
});

// Add Recipe
router.post('/', async (req, res) => {
	const recipes = await loadRecipesCollection();
	await recipes.insertOne({
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		createdAt: new Date(),
		updatedAt: null,
		ingredients: req.body.ingredients
	});
	res.status(201).send();
});

// Update Recipe
router.put('/:id', async (req, res) => {
	const recipes = await loadRecipesCollection();
	await recipes.updateOne(
		{ _id: new mongodb.ObjectID(req.params.id) },
		{
			$set: {
				title: req.body.title,
				description: req.body.description,
				ingredients: req.body.ingredients,
				image: req.body.image,
				updatedAt: new Date()
			}
		}
	);
	res.status(200).send();
});

router.put('/ingredients/:id', async (req, res) => {
	const recipes = await loadRecipesCollection();
	await recipes.updateOne(
		{ _id: new mongodb.ObjectID(req.params.id) },
		{
			$set: {
				ingredients: req.body.ingredients,
				updatedAt: new Date()
			}
		}
	);
	res.status(200).send();
});

// Delete Recipe
router.delete('/:id', async (req, res) => {
	const recipes = await loadRecipesCollection();
	await recipes.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
	res.status(200).send();
});

async function loadRecipesCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb://admin123:admin123@ds341847.mlab.com:41847/angular_express',
		{
			useNewUrlParser: true
		}
	);
	return client.db('angular_express').collection('recipes');
}
module.exports = router;
