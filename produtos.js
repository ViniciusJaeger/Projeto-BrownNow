//Variable que mantiene el estado visible del carrinho
var carrinhoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    
    //Agregremos funcionalidad a los botones eliminar del carrinho
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemcarrinho);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    //Agregamos funcionalidad al boton Agregar al carrinho
    var botonesAgregarAlcarrinho = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlcarrinho.length;i++){
        var button = botonesAgregarAlcarrinho[i];
        button.addEventListener('click', agregarAlcarrinhoClicked);
    }

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}
//Eliminamos todos los elementos del carrinho y lo ocultamos
function pagarClicked(){
    alert("Gracias por la compra");
    //Elimino todos los elmentos del carrinho
    var carrinhoItems = document.getElementsByClassName('carrinho-items')[0];
    while (carrinhoItems.hasChildNodes()){
        carrinhoItems.removeChild(carrinhoItems.firstChild)
    }
    actualizarTotalcarrinho();
    ocultarcarrinho();
}
//Funciòn que controla el boton clickeado de agregar al carrinho
function agregarAlcarrinhoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var preco = item.getElementsByClassName('preco-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlcarrinho(titulo, preco, imagenSrc);

    hacerVisiblecarrinho();
}

//Funcion que hace visible el carrinho
function hacerVisiblecarrinho(){
    carrinhoVisible = true;
    var carrinho = document.getElementsByClassName('carrinho')[0];
    carrinho.style.marginRight = '0';
    carrinho.style.opacity = '1';

    var items =document.getElementsByClassName('container-items')[0];
    items.style.width = '60%';
}

//Funciòn que agrega un item al carrinho
function agregarItemAlcarrinho(titulo, preco, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemscarrinho = document.getElementsByClassName('carrinho-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrinho
    var nombresItemscarrinho = itemscarrinho.getElementsByClassName('carrinho-item-titulo');
    for(var i=0;i < nombresItemscarrinho.length;i++){
        if(nombresItemscarrinho[i].innerText==titulo){
            alert("El item ya se encuentra en el carrinho");
            return;
        }
    }

    var itemcarrinhoContenido = `
        <div class="carrinho-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrinho-item-detalles">
                <span class="carrinho-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrinho-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrinho-item-preco">${preco}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemcarrinhoContenido;
    itemscarrinho.append(item);

    //Agregamos la funcionalidad eliminar al nuevo item
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemcarrinho);

    //Agregmos al funcionalidad restar cantidad del nuevo item
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    //Agregamos la funcionalidad sumar cantidad del nuevo item
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    //Actualizamos total
    actualizarTotalcarrinho();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrinho-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrinho-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrinho-item-cantidad')[0].value = cantidadActual;
    actualizarTotalcarrinho();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrinho-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrinho-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrinho-item-cantidad')[0].value = cantidadActual;
        actualizarTotalcarrinho();
    }
}

//Elimino el item seleccionado del carrinho
function eliminarItemcarrinho(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //Actualizamos el total del carrinho
    actualizarTotalcarrinho();

    //la siguiente funciòn controla si hay elementos en el carrinho
    //Si no hay elimino el carrinho
    ocultarcarrinho();
}
//Funciòn que controla si hay elementos en el carrinho. Si no hay oculto el carrinho.
function ocultarcarrinho(){
    var carrinhoItems = document.getElementsByClassName('carrinho-items')[0];
    if(carrinhoItems.childElementCount==0){
        var carrinho = document.getElementsByClassName('carrinho')[0];
        carrinho.style.marginRight = '-100%';
        carrinho.style.opacity = '0';
        carrinhoVisible = false;
    
        var items =document.getElementsByClassName('container-items')[0];
        items.style.width = '100%';
    }
}
//Actualizamos el total de carrinho
function actualizarTotalcarrinho(){
    //seleccionamos el container carrinho
    var carrinhocontainer = document.getElementsByClassName('carrinho')[0];
    var carrinhoItems = carrinhocontainer.getElementsByClassName('carrinho-item');
    var total = 0;
    //recorremos cada elemento del carrinho para actualizar el total
    for(var i=0; i< carrinhoItems.length;i++){
        var item = carrinhoItems[i];
        var precoElemento = item.getElementsByClassName('carrinho-item-preco')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var preco = parseFloat(precoElemento.innerText.replace('R$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrinho-item-cantidad')[0];
        console.log(preco);
        var cantidad = cantidadItem.value;
        total = total + (preco * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrinho-preco-total')[0].innerText = 'R$'+total.toLocaleString("pt-BR") + ",00";

}








