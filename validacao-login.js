// Você está desenvolvendo o sistema de login de um app interno da empresa. O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

// Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

const tentativas = ['1234', 'admin', 'secreto'];
const senhaCorreta = 'secreto';

tentativas.forEach((tentativa, index) => {
  if (tentativa === senhaCorreta) {
    console.log('Acesso permitido!');
  } else {
    console.log('Tentativa', index + 1, 'inválida.');
  }
});
