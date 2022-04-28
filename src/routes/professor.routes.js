const Router = require('express');
const professorController = require('../controllers/professorController');

const routes = Router();

routes.get('/', professorController.index);

module.exports = routes;