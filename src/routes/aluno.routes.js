const Router = require('express');
const alunoController = require('../controllers/alunoController');

const routes = Router();

routes.get('/', alunoController.index);
routes.put('/', alunoController.update);

module.exports = routes;