const Router = require('express');
const cursoController = require('../controllers/cursoController');

const routes = Router();

routes.get('/', cursoController.index);

module.exports = routes;