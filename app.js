let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
  
    if (nome.value === '') {
      alert('Por favor, insira um nome.');
      return;
    }
  
    // Verificar se o nome já existe no array
    if (amigos.includes(nome.value)) {
      alert('Este nome já foi adicionado.');
      return;
    }
  
    amigos.push(nome.value);
    document.getElementById('amigo').value = '';
  
    listaAmigos.innerHTML = '';
  
    for (let amigo of amigos) {
      let li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    }
  }

function sortearAmigo() {
    if (amigos.length === 0) {
        return 'Não há amigos disponíveis.'
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `amigo sorteado: ${amigoSorteado}`;
}

