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
function addToCart(name, price) {
  var existingItem = cartItems.find(function(item) {
    return item.name === name;
  });

  // Popup element
  var popupElement = document.getElementById('cart-popup');

  // Se o item já foi
  if (existingItem) {
    var confirmAddToCart = confirm('Este item já foi adicionado ao carrinho. Deseja ir ao carrinho?');

    if (confirmAddToCart) {
      // Redirect the user to the cart on the same page
      window.location.hash = 'carrinho'; // Assuming the cart element has an ID of 'cart'
    } else {
      popupElement.style.display = 'block';
      setTimeout(function() {
        popupElement.style.display = 'none';
      }, 2000);
    }
  } else {
    var newItem = {
      name: name,
      price: price,
      quantity: 1
    };
    cartItems.push(newItem);
    document.getElementById('alert').style.display = 'none';
    showAddedToCartMessage(); // Call the function to display the message
  }
  // Execute the function
  updateCart();
}

// Function to show the "Item added to the cart" message
function showAddedToCartMessage() {
  var messageElement = document.getElementById('cart-message');
  messageElement.style.display = 'block';
  setTimeout(function() {
    messageElement.style.display = 'none';
  }, 2000);
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
    imgElement.src = 'image' + (index + 1) + '.png';

    var infoElement = document.createElement('div');
    infoElement.classList.add('info');
    infoElement.innerHTML = '<div class="name">' + item.name + '</div>' +
      '<div class="price">$' + item.price + '</div>';
     
    var quantityElement = document.createElement('div');
    quantityElement.classList.add('quantity');
    var inputElement = document.createElement('input');
    inputElement.type = 'number';
    inputElement.value = item.quantity;
    inputElement.min = '1';
    inputElement.onchange = function() {
      updateQuantity(index, parseInt(inputElement.value));
    };


// botao que add o item do carrinho
    var addButton = document.createElement('button');
    addButton.innerText = '+';
    addButton.classList.add('add-remove-button');
    addButton.onclick = function() {
      inputElement.value = parseInt(inputElement.value) + 1;
      updateQuantity(index, parseInt(inputElement.value));
    };


// funcao que adiciona o item ao carrinho
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


//  funcao que exibe o preco total de itens na tela
  var totalElement = document.querySelector('.total');
  var total = cartItems.reduce(function(sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
  totalElement.innerText = 'Total: R$' + total;
}

// botao de finalizar compra
function showPaymentPopup() {
  document.getElementById('payment-popup').style.display = 'block';
}

function closePaymentPopup() {
  document.getElementById('payment-popup').style.display = 'none';
}

function generateQRCode() {
 
}

function generateBoleto() {
}

function payWithCard() {
}