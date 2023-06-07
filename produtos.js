function openPopup(product) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    var popupName = document.getElementById("popup-name");
    var popupPrice = document.getElementById("popup-price");
    var popupGallery = document.getElementById("popup-gallery");

    // Defina as informações detalhadas do produto selecionado
    if (product === "produto1") {
      popupImage.src = "produto1.jpg";
      popupName.textContent = "Produto 1";
      popupPrice.textContent = "R$ 10,00";
      popupGallery.innerHTML = `
        <img src="produto1_1.jpg" alt="Produto 1 - Foto 1">
        <img src="produto1_2.jpg" alt="Produto 1 - Foto 2">
        <img src="produto1_3.jpg" alt="Produto 1 - Foto 3">
      `;
    } else if (product === "produto2") {
      popupImage.src = "produto2.jpg";
      popupName.textContent = "Produto 2";
      popupPrice.textContent = "R$ 15,00";
      popupGallery.innerHTML = `
        <img src="produto2_1.jpg" alt="Produto 2 - Foto 1">
        <img src="produto2_2.jpg" alt="Produto 2 - Foto 2">
      `;
    } else if (product === "produto3") {
      popupImage.src = "produto3.jpg";
      popupName.textContent = "Produto 3";
      popupPrice.textContent = "R$ 20,00";
      popupGallery.innerHTML = `
        <img src="produto3_1.jpg" alt="Produto 3 - Foto 1">
      `;
    }

    // Abra o pop-up
    popup.style.visibility = "visible";
    popup.style.opacity = 1;

  }

  function closePopup() {
    var popup = document.getElementById("popup");

    // Feche o pop-up
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;


    document.removeEventListener("click", outsideClick);

    function outsideClick(event) {
        var popup = document.getElementById("popup");
        var popupContent = document.querySelector(".popup-content");
    
        // Verifique se o clique ocorreu fora do pop-up
        if (!popupContent.contains(event.target)) {
          closePopup();
        }
      }
  }

  