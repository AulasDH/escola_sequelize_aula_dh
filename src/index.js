const express = require('express');
const professorRoutes = require('./routes/professor.routes');
const cursoRoutes = require('./routes/curso.routes');
const alunoRoutes = require('./routes/aluno.routes');
const { sequelize } = require('./database/models/');

const app = express();

app.use('/professores', professorRoutes);
app.use('/cursos', cursoRoutes);
app.use('/alunos', alunoRoutes);

app.get('/queries', async (request, response) => {
  // [?, ?]
  // [nome, sobrenome]

  // { nome: nome, sobrenome: sobrenome }
  // { nome, sobrenome }

  // podemos usar ?

  //   const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome = ? AND sobrenome = ?',
  //   {
  //     replacements: [nome, sobrenome],
  //     type: sequelize.QueryTypes.SELECT
  //   }
  // );

  // podemos usar bind $
  //   const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome = $1 AND sobrenome = $2',
  //   {
  //     bind: [nome, sobrenome],
  //     type: sequelize.QueryTypes.SELECT
  //   }
  // );

  // podemos usar chave :nome
  // const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome = :nome AND sobrenome = :sobrenome',
  //   {
  //     replacements: { nome, sobrenome },
  //     type: sequelize.QueryTypes.SELECT
  //   }
  // );

  const { nome, sobrenome } = request.query;

  const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome = $1 AND sobrenome = $2',
    {
      bind: [nome, sobrenome],
      type: sequelize.QueryTypes.SELECT
    }
  );

  response.json(alunos)
})

app.use((error, request, response, next) => {
  return response.status(500).json(error.message)
});

app.listen(3333);