const express = require('express');
const { Professor } = require('./database/models');

const app = express();

app.get('/professores', async (request, response) => {
  const professores = await Professor.findAll({ raw: true });

  return response.json(professores);
})

app.listen(3333);