const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log('conectado com sucesso');
  }
});

const app = customExpress();

app.listen(3333, () => {
  console.log('Servidor Rodando na porta 3000');
});
