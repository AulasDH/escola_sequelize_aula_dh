const { Curso } = require('../database/models');

const cursoController = {
  index: async (request, response) => {
    try {
      const cursos = await Curso.findAll({
        include: ['area', 'turmas']
      });

      return response.json(cursos);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = cursoController;