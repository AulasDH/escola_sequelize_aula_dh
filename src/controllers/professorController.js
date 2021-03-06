const { Professor } = require('../database/models');

const professorController = {
  index: async (request, response) => {
    try {
      const professores = await Professor.findAll();

      return response.json(professores);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = professorController;