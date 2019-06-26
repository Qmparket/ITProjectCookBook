const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const recipes = require('./routes/api/recipes');
app.use('/api/recipes', recipes);

// const recipes = [
// 	{
// 		id: 1,
// 		title: 'Spagetti Carbonara',
// 		difficulty: 'medium',
// 		ingredients: [ { name: 'egg', amount: 2 }, { name: 'pasta', amount: 3 } ]
// 	},
// 	{
// 		id: 2,
// 		title: 'Pizza Margarita',
// 		difficulty: 'easy',
// 		ingredients: [ { name: 'flour', amount: 500 }, { name: 'tomato sauce', amount: 300 } ]
// 	}
// ];

app.get('/', (req, res) => {
	res.send('Hello worldd');
});
// app.get('/api/recipes', (req, res) => {
// 	res.send(recipes);
// });

// app.get('/api/courses/:id', (req, res) => {
// 	const id = req.params.id;
// 	const course = courses.find((c) => {
// 		return c.id === parseInt(id);
// 	});
// 	if (course) {
// 		res.send(course);
// 	} else {
// 		res.status(404).send('The course was not found');
// 	}
// });

// app.post('/api/courses', (req, res) => {
// 	const { error } = validateCourse(req.body);
// 	if (error) {
// 		res.status(400).send(error.details[0].message);
// 		return;
// 	} else {
// 		const course = {
// 			id: courses.length + 1,
// 			name: req.body.name
// 		};
// 		courses.push(course);
// 		res.send(course);
// 	}
// });

// app.put('/api/courses/:id', (req, res) => {
// 	const { error } = validateCourse(req.body);

// 	const id = req.params.id;
// 	if (!id) {
// 		res.status(400).send('id is required');
// 		return;
// 	}
// 	const course = courses.find((c) => {
// 		return c.id === parseInt(id);
// 	});
// 	if (!course) {
// 		res.status(404).send('Course not found');
// 		return;
// 	}

// 	if (error) {
// 		res.status(400).send(error.details[0].message);
// 		return;
// 	}

// 	course.name = req.body.name;
// 	res.send(course);
// });

// app.delete('/api/courses/:id', (req, res) => {
// 	const course = courses.find((c) => c.id === parseInt(req.params.id));
// 	if (!course) {
// 		res.status(404).send('course not found');
// 	}

// 	const index = courses.indexOf(course);
// 	courses.splice(index, 1);
// 	res.send(course);
// });

// function validateCourse(course) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);
// }

// Port
const port = 3000 || process.env.PORT;
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
