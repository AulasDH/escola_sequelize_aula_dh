const { Aluno } = require('../database/models');
const { AlunoTurma } = require('../database/models');

const alunoController = {
  index: async (request, response) => {
    try {
      const alunos = await Aluno.findAll({
        include: ['turmas']
      });

      return response.json(alunos);
    } catch (error) {
      return next(error);
    }
  },
  update: async (request, response, next) => {
    try {
      const alunosTurmas = await AlunoTurma.findAll({
        where: {
          alunoId: [3, 7, 15, 17]
        }
      });

      await Promise.all(
        alunosTurmas.map((alunoTurma) => {
          alunoTurma.numeroFaltas += 1;

          return alunoTurma.save();
        })
      );

      return response.json(alunosTurmas);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = alunoController;