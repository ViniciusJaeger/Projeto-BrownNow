
function openPopup(product) {
  var popup = document.getElementById("popup");
  var popupName = document.getElementById("popup-name");
  var popupPrice = document.getElementById("popup-price");
  var popupDescription = document.getElementById("popup-description");

  // Defina as informações detalhadas do produto selecionado
  if (product === "produto1") {
    popupName.textContent = "Brownie de Castanha";
    popupPrice.textContent = "R$ 10,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong> Manteiga sem sal, Chocolate meio-amargo, Ovos, Açúcar mascavo, Farinha de trigo, Sal, Castanhas picadas ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  } else if (product === "produto2") {
    popupName.textContent = "Brownie Gourmet Trufado";
    popupPrice.textContent = "R$ 15,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong> Chocolate Meio Amargo NESTLÉ® DOIS FRADES® picado, Manteiga derretida, Açúcar, Ovos, Essência de baunilha, farinha de trigo,Cacau em Pó NESTLÉ® DOIS FRADES®,  sal,  Cobertura Chocolate Branco NESTLÉ® DOIS FRADES®, Chocolate Meio Amargo NESTLÉ® DOIS FRADES®, NESTLÉ®, Creme de Leite, MOÇA® ,Avelã";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  } else if (product === "produto3") {
    popupName.textContent = "Brownie de Óreo Trufado";
    popupPrice.textContent = "R$ 20,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Manteiga sem sal, Chocolate em tablete, Ovo, Chocolate em pó, Óreo, Açúcar mascavado, Farinha e  Sal. ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  } else if (product === "produto4") {
    popupName.textContent = "Brownie de Amendoim Elegante";
    popupPrice.textContent = "R$ 15,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Chocolate meio amargo, Manteiga, Ovo, Açúcar refinado,  Essência de baunilha, Farinha de trigo , Amendoim torrado sem sal e Amendoim torrado inteiro. ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto5") {
    popupName.textContent = "Brownie de Amendoim Refinado";
    popupPrice.textContent = "R$ 25,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Chocolate meio amargo, Manteiga, Ovo, Cacau em pó, Açúcar refinado, Farinha, doce de leite, sal, amendoim ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto6") {
    popupName.textContent = "Brownie de Amendoim Clássico";
    popupPrice.textContent = "R$ 20,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong> Ovos, Manteiga, Ovo, Cacau em pó, Açúcar, fermento, sal, amendoim, Chocolate meio amargo ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto7") {
    popupName.textContent = "Brownie de Maracujá Gourmet";
    popupPrice.textContent = "R$ 30,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Açúcar, Manteiga, Ovo, Polpa de maracujá, Açúcar, Farinha, Chocolate Branco, sal, Rum, Fermento, Bicarbonato de sódio ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto8") {
    popupName.textContent = "Brownie de Maracujá Maravilha";
    popupPrice.textContent = "R$ 20,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Açúcar, Manteiga, Ovo, Polpa de maracujá, Açúcar, Farinha, Chocolate Branco, sal, Rum, Fermento, Chocolate meio amargo, Coco ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto9") {
    popupName.textContent = "Brownie de Maracujá Fresco";
    popupPrice.textContent = "R$ 20,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Açúcar, Manteiga, Ovo, Polpa de maracujá, Açúcar, Farinha, Chocolate Branco, sal, Rum, Fermento, Chocolate meio amargo, Leite Condensado, Chantilly ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto10") {
    popupName.textContent = "Brownie de Frutas Silvestres";
    popupPrice.textContent = "R$ 20,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Açúcar, Manteiga, Ovo,Frutas Silvestres Açúcar mascavo, Farinha, sal, Fermento, Chocolate meio amargo ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto11") {
    popupName.textContent = "Brownie de Frutas Silvestres";
    popupPrice.textContent = "R$ 25,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Ovos, Manteiga, Cacau em pó, Açúcar, fermento, sal, amendoim, Chocolate meio amargo, Frutas Silvestres ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
  }else if (product === "produto12") {
    popupName.textContent = "Brownie Red Velvet";
    popupPrice.textContent = "R$ 30,00";
    popupPrice.style.marginTop = '10px'
    popupDescription.innerHTML = "<strong>Ingredientes:</strong>  Farinha de trigo sem fermento, Manteiga, Ovos, Cacau em pó, Açúcar refinado, fermento, sal, amendoim, Corante Vermelho, chocolate em barra ao leite ";
    popupDescription.style.fontSize = '12px';
    popupDescription.style.marginTop = '10px';
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

    }