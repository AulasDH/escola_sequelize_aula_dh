const express = require('express');
const { Professor } = require('./database/models');

const app = express();

app.get('/professores', async (request, response, next) => {
  try {
    const professores = await Professor.findAll({
      include: ['turmas']
    });

    return response.json(professores);
  } catch (error) {
    return next(error);
  }
});

app.use((error, request, response, next) => {
  return response.status(error.status).json(error.message)
});

app.listen(3333);