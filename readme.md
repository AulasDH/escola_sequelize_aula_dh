[?, ?]
[nome, sobrenome]

{ nome: nome, sobrenome: sobrenome }
{ nome, sobrenome }

podemos usar ?

  const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome = ? AND sobrenome = ?',
  {
    replacements: [nome, sobrenome],
    type: sequelize.QueryTypes.SELECT
  }
);

podemos usar bind $
  const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome = $1 AND sobrenome = $2',
  {
    bind: [nome, sobrenome],
    type: sequelize.QueryTypes.SELECT
  }
);

podemos usar chave :nome
const alunos = await sequelize.query('SELECT * FROM alunos WHERE nome = :nome AND sobrenome = :sobrenome',
  {
    replacements: { nome, sobrenome },
    type: sequelize.QueryTypes.SELECT
  }
);
