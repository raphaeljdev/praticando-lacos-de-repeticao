// Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

// Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?

let senhaDigitada = 'seguranç@2025';

console.log('Senha cadastrada: ', senhaDigitada);

for (let i = 0; i < senhaDigitada.length; i++) {
  console.log('Caractere', i + 1, '-->', senhaDigitada[i]);
}
