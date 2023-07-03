var cartItems = [];

function showPopup(name, price, ingredients) {
  document.getElementById('popup-name').innerText = name;
  document.getElementById('popup-price').innerText = 'Preço: ' + price;
  document.getElementById('popup-ingredients').innerText = 'Ingredientes: ' + ingredients;

  document.getElementById('popup-overlay').style.display = 'block';
  document.getElementById('popup-content').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
  document.getElementById('popup-content').style.display = 'none';
}

function addToCart(name, price) {
  var existingItem = cartItems.find(function(item) {
    return item.name === name;
  });

  if (existingItem) {
    document.getElementById('alert').innerText = 'Este item já foi adicionado ao carrinho.';
    document.getElementById('alert').style.display = 'block';
  } else {
    var newItem = {
      name: name,
      price: price,
      quantity: 1
    };
    cartItems.push(newItem);
    document.getElementById('alert').style.display = 'none';
  }

  updateCart();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateQuantity(index, quantity) {
  cartItems[index].quantity = quantity;
  updateCart();
}

function updateCart() {
  var cartElement = document.getElementById('cart-items');
  cartElement.innerHTML = '';

  cartItems.forEach(function(item, index) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('item');

    var imgElement = document.createElement('img');
    imgElement.src = 'product' + (index + 1) + '.jpg';

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

    var addButton = document.createElement('button');
    addButton.innerText = '+';
    addButton.classList.add('add-remove-button');
    addButton.onclick = function() {
      inputElement.value = parseInt(inputElement.value) + 1;
      updateQuantity(index, parseInt(inputElement.value));
    };

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

  var totalElement = document.querySelector('.total');
  var total = cartItems.reduce(function(sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
  totalElement.innerText = 'Total: $' + total;
}


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
  // Lógica para pagar com cartão de crédito
}