// Você está desenvolvendo o sistema de login de um app interno da empresa. O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

// Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

const tentativas = ['1234', 'admin', 'secreto', 'feijao'];
const senhaCorreta = 'feijao';
let acessoLiberado = false;
let contador = 0;

while (contador < tentativas.length && contador < 3) {
  if (tentativas[contador] === senhaCorreta) {
    console.log('Acesso permitido!');
    acessoLiberado = true;
    break;
  } else {
    console.log('Tentativa', contador + 1, 'inválida.');
  }
  contador++;
}

if (!acessoLiberado) {
  console.log('Acesso bloqueado. Número máximo de tentativas atingido.');
}
