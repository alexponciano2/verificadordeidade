function verificar() {
    const idade = document.getElementById('idade').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const resultado = `Idade: ${idade}, Gênero: ${genero}`;
    document.getElementById('res').textContent = resultado;
  }
  