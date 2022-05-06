const express = require('express');
const professorRoutes = require('./routes/professor.routes');
const cursoRoutes = require('./routes/curso.routes');
const alunoRoutes = require('./routes/aluno.routes');
const { sequelize, Curso } = require('./database/models/');

const app = express();

app.use('/professores', professorRoutes);
app.use('/cursos', cursoRoutes);
app.use('/alunos', alunoRoutes);

app.get('/queries', async (request, response) => {

  /**
   * @description ativida 1 letra 'A' e 'B' 
    const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome LIKE :campo OR sobrenome LIKE :campo;',
      {
        replacements: { campo: `%${campo}%` },
        type: sequelize.QueryTypes.SELECT
      }
    );
  */

  /** 
    * @description Atividade 1 letra C
    const alunos = await sequelize.query('SELECT * FROM alunos WHERE ano_matricula = :anoMatricula;',
      {
        replacements: { anoMatricula: campo },
        type: sequelize.QueryTypes.SELECT
      }
    );
  */

  /**
   * @description Atividade 1 letra D

    const alunos = await sequelize.query(`
      SELECT alunos.*, alunos_turmas.numero_faltas as numeroFaltas
      FROM alunos 
      INNER JOIN alunos_turmas ON alunos.id = alunos_turmas.aluno_id 
      WHERE alunos_turmas.numero_faltas > ?;
    `,
      {
        replacements: [campo],
        type: sequelize.QueryTypes.SELECT,
        mapToModel: true,
        model: Aluno,
      }
    );
  */

  const { campo } = request.query;

  const alunos = await sequelize.query(`
    SELECT * FROM cursos
    INNER JOIN areas ON cursos.area_id = areas.id
    WHERE areas.tipo = $1;
  `,
    {
      bind: [campo],
      type: sequelize.QueryTypes.SELECT,
      mapToModel: true,
      model: Curso,
    }
  );

  response.json(alunos)
})

app.use((error, request, response, next) => {
  return response.status(500).json(error.message)
});

app.listen(3333);