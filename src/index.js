const express = require('express');
const professorRoutes = require('./routes/professor.routes');
const cursoRoutes = require('./routes/curso.routes');
const alunoRoutes = require('./routes/aluno.routes');

const app = express();

app.use('/professores', professorRoutes);
app.use('/cursos', cursoRoutes);
app.use('/alunos', alunoRoutes);

app.use((error, request, response, next) => {
  return response.status(500).json(error.message)
});

app.listen(3333);