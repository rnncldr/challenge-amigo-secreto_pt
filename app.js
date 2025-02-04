// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // 1. Captura o valor do campo de entrada
    const campoNome = document.getElementById("nomeAmigo");
    const nome = campoNome.value.trim(); // Remove espaços em branco no início e no fim

    // 2. Valida a entrada
    if (nome === "") {
        // Se o campo estiver vazio, exibe um alerta de erro
        alert("Por favor, insira um nome.");
        return; // Sai da função sem adicionar nada ao array
    }

    // 3. Atualiza o array de amigos
    listaAmigos.push(nome); // Adiciona o nome ao array
    console.log("Lista de amigos atualizada:", listaAmigos); // Exibe o array no console para depuração

    // 4. Limpa o campo de entrada
    campoNome.value = "";

    // 5. Atualiza a exibição da lista na tela
    atualizarListaAmigos();
}

// Função para atualizar a exibição da lista de amigos na tela
function atualizarListaAmigos() {
    // 1. Obter o elemento da lista (<ul>)
    const listaHTML = document.getElementById("listaAmigos");

    // 2. Limpar a lista existente
    listaHTML.innerHTML = ""; // Remove todos os itens da lista

    // 3. Percorrer o array de amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        // 4. Criar um novo elemento de lista (<li>)
        const itemLista = document.createElement("li");
        itemLista.textContent = listaAmigos[i]; // Define o texto do <li> como o nome do amigo

        // 5. Adicionar o elemento à lista (<ul>)
        listaHTML.appendChild(itemLista);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (listaAmigos.length === 0) {
        alert("Não há amigos na lista para sortear. Adicione amigos primeiro!");
        return; // Sai da função se o array estiver vazio
    }

    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // 3. Obter o nome sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // 4. Mostrar o resultado em um alert
    alert(`O amigo sorteado é: ${amigoSorteado}! 🎉`);
}