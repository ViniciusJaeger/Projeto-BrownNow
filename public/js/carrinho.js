
// Seletor do elemento do carrinho
const carrinho = document.querySelector('#carrinho');

// Seletor do elemento para abrir o carrinho
const botaoAbrir = document.querySelector('#botao-abrir-carrinho');

// Seletor do elemento para fechar o carrinho
const botaoFechar = document.querySelector('.fechar-carrinho');

// Função para abrir o carrinho
function abrirCarrinho() {
  carrinho.classList.add('aberto');
}

// Função para fechar o carrinho
function fecharCarrinho() {
  carrinho.classList.remove('aberto');
}

// Evento de clique para abrir o carrinho
botaoAbrir.addEventListener('click', abrirCarrinho);

// Evento de clique para fechar o carrinho
botaoFechar.addEventListener('click', fecharCarrinho);