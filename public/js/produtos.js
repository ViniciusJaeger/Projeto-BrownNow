// Guarda os elementos no carrinho
var cartItems = [];
// Faz o popup aparecer na tela
function showPopup(name, price, ingredients) {
  document.getElementById('popup-name').innerText = name;
  document.getElementById('popup-price').innerText = 'Preço: ' + price;
  document.getElementById('popup-ingredients').innerText = 'Ingredientes: ' + ingredients;

  document.getElementById('popup-overlay').style.display = 'block';
  document.getElementById('popup-content').style.display = 'block';
}
//  Executa a funcao fechar do popup
function hidePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
  document.getElementById('popup-content').style.display = 'none';
}
//  adiciona itens ao carrinho
function addToCart(name, price, image) {
  var existingItem = cartItems.find(function(item) {
      return item.name === name;
  });

  // Popup element
  var popupElement = document.getElementById('cart-popup');

  // Se o item já foi adicionado
  if (existingItem) {
      popupElement.style.display = 'block';
      setTimeout(function() {
          popupElement.style.display = 'none';
      }, 2000);
  } else {
      var newItem = {
          name: name,
          price: price,
          quantity: 1,
          image: image
      };
      cartItems.push(newItem);
      showAddedToCartMessage();
  }

  updateCart();
}

function showAddedToCartMessage() {
  var messageElement = document.getElementById('cart-message');
  messageElement.style.display = 'block';
  setTimeout(function() {
    messageElement.style.display = 'none';
  }, 1000);
}

// remove o item do carrinho
function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
}
// adiciona o item a mais, ja add no carrinho
function updateQuantity(index, quantity) {
  cartItems[index].quantity = quantity;
  updateCart();
}

// item que é add ao carrinho
function updateCart() {
  var cartElement = document.getElementById('cart-items');
  cartElement.innerHTML = '';

  cartItems.forEach(function(item, index) {
      var itemElement = document.createElement('div');
      itemElement.classList.add('item');

      var imgElement = document.createElement('img');
      imgElement.src = item.image;

      var infoElement = document.createElement('div');
      infoElement.classList.add('info');
      infoElement.innerHTML = '<div class="name">' + item.name + '</div>' +
          '<div class="price">R$' + item.price + '</div>';

      var quantityElement = document.createElement('div');
      quantityElement.classList.add('quantity');
      var inputElement = document.createElement('input');
      inputElement.type = 'number';
      inputElement.value = item.quantity;
      inputElement.min = '1';
      inputElement.onchange = function() {
          updateQuantity(index, parseInt(inputElement.value));
      };

      // Botão que adiciona mais itens
      var addButton = document.createElement('button');
      addButton.innerText = '+';
      addButton.classList.add('add-remove-button');
      addButton.onclick = function() {
          inputElement.value = parseInt(inputElement.value) + 1;
          updateQuantity(index, parseInt(inputElement.value));
      };

      // Função que remove itens do carrinho
      var removeButton = document.createElement('button');
      removeButton.innerText = '-';
      removeButton.classList.add('add-remove-button');
      removeButton.onclick = function() {
          if (parseInt(inputElement.value) > 1) {
              inputElement.value = parseInt(inputElement.value) - 1;
              updateQuantity(index, parseInt(inputElement.value));
          }
      };

      var removeElement = document.createElement('span');
      removeElement.classList.add('remove');
      removeElement.innerHTML = '&#128465;';
      removeElement.onclick = function() {
          removeItem(index);
      };

      quantityElement.appendChild(removeButton);
      quantityElement.appendChild(inputElement);
      quantityElement.appendChild(addButton);
      itemElement.appendChild(imgElement);
      itemElement.appendChild(infoElement);
      itemElement.appendChild(quantityElement);
      itemElement.appendChild(removeElement);

      cartElement.appendChild(itemElement);
  });

  if (cartItems.length > 0) {
      document.querySelector('.finalizar').style.display = 'block';
  } else {
      document.querySelector('.finalizar').style.display = 'none';
  }
}

// Função para atualizar a quantidade do item no carrinho
function updateQuantity(index, quantity) {
  cartItems[index].quantity = quantity;
  updateCart();
}

// Função para remover um item do carrinho
function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Função para exibir mensagem de item adicionado ao carrinho
function showAddedToCartMessage() {
  var cartMessage = document.getElementById('cart-message');
  cartMessage.style.display = 'block';
  setTimeout(function() {
      cartMessage.style.display = 'none';
  }, 2000);
}



//  funcao que exibe o preco total de itens na tela
  var totalElement = document.querySelector('.total');
  var total = cartItems.reduce(function(sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
  totalElement.innerText = 'Total: R$' + total;


// botao de finalizar compra
function showPaymentPopup() {
  document.getElementById('payment-popup').style.display = 'block';
}

function closePaymentPopup() {
  document.getElementById('payment-popup').style.display = 'none';
}

function generateQRCode(texto) {
  // Cria um elemento <div> para o popup
  var popupDiv = document.createElement("div");
  popupDiv.style.position = "fixed";
  popupDiv.style.top = "50%";
  popupDiv.style.left = "50%";
  popupDiv.style.transform = "translate(-50%, -50%)";
  popupDiv.style.backgroundColor = "white";
  popupDiv.style.padding = "20px";
  popupDiv.style.border = "1px solid #ccc";
  popupDiv.style.zIndex = "9999";
  
  // Cria um elemento <img> para o símbolo do Pix
  var pixImg = document.createElement("img");
  pixImg.src = "images/pix.png";
  pixImg.style.display = "block";
  pixImg.style.marginBottom = "10px";
  pixImg.style.width = '100px'
  pixImg.style.height = '100px'
  pixImg.style.margin = 'auto'
  pixImg.style.marginBottom = '10px'

  
  // Adiciona o elemento <img> ao elemento <div>
  popupDiv.appendChild(pixImg);
  
  // Cria um elemento <img> para o QR Code
  var qrCodeImg = document.createElement("img");
  qrCodeImg.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(texto);
  qrCodeImg.style.display = "block";
  qrCodeImg.style.marginBottom = "10px";
  
  // Adiciona o elemento <img> ao elemento <div>
  popupDiv.appendChild(qrCodeImg);
  
  // Cria um botão para fechar o popup
  var fecharBotao = document.createElement("button");
  fecharBotao.innerHTML = "Fechar";
  fecharBotao.style.padding = "5px 10px";
  fecharBotao.style.backgroundColor = "#544541";
  fecharBotao.style.border = "none";
  fecharBotao.style.cursor = "pointer";
  fecharBotao.style.color = '#fff'
  fecharBotao.style.width = '100%'
  fecharBotao.style.borderRadius = '10px'
  fecharBotao.style.justifySelf = 'center'
  
  // Adiciona um evento de clique para fechar o popup
  fecharBotao.addEventListener("click", function() {
    document.body.removeChild(popupDiv);
  });
  
  // Adiciona o botão ao elemento <div>
  popupDiv.appendChild(fecharBotao);
  
  // Adiciona o elemento <div> ao body do documento
  document.body.appendChild(popupDiv);

  closePaymentPopup()
}

// Exemplo de uso
var textoExemplo = "ChavePix: exemplo@chave.com";
gerarQRCodePopup(textoExemplo);

function generateBoleto() {
}

// popup para pagamento
function gerarcard() {
  var popupOverlay = document.querySelector(".popup-cardpay");
  var popupContent = document.querySelector(".popup-content-card");

  function openPopup() {
    popupOverlay.style.display = "flex";
  }

  function closePopup() {
    popupOverlay.style.display = "none";
  }

  openPopup();

  popupOverlay.addEventListener("click", function(event) {
    if (event.target === popupOverlay) {
      closePopup();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closePopup();
    }
  });

  closePaymentPopup()
}

  // Função para exibir o popup ao carregar a página
  window.onload = function() {
    showPopup();
};

// Função para exibir o popup
function AlertPopup() {
    var popupAviso = document.getElementById('popup-aviso');
    var popupAvisoContent = document.getElementById('popup-aviso-content');
    var closeBtn = document.getElementById('close-btn');

    popupAviso.style.display = 'block';
    popupAvisoContent.style.display = 'block';

    // Fechar o popup ao clicar no botão "Fechar"
    closeBtn.onclick = function() {
        popupAviso.style.display = 'none';
        popupAvisoContent.style.display = 'none';
    };

    // Fechar o popup ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == popupAviso) {
            popupAviso.style.display = 'none';
            popupAvisoContent.style.display = 'none';
        }

        window.onload = function() {
          AlertPopup();
      };
    };
}