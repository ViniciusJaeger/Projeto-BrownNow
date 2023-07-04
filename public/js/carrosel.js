var slideIndex = 0; // Variável que guarda o índice do slide atual
var slides = document.getElementsByClassName("carrossel-img"); // Obtém uma coleção de elementos com a classe "carrossel-img"
var timer;

function showSlide(n) {
  clearTimeout(timer); // Limpa o temporizador anterior, se houver
  slideIndex += n; // Incrementa ou decrementa o índice do slide

  if (slideIndex >= slides.length) { // Se o índice for maior ou igual ao número de slides, volta ao primeiro slide
    slideIndex = 0;
  } else if (slideIndex < 0) { // Se o índice for menor que zero, vai para o último slide
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) { // Percorre todos os slides
    slides[i].classList.remove("active"); // Remove a classe "active" de cada slide
  }

  slides[slideIndex].classList.add("active"); // Adiciona a classe "active" ao slide atual
  timer = setTimeout(function() { // Define um temporizador para chamar a função showSlide novamente após 5 segundos
    showSlide(1);
  }, 5000);
}

var leftArrow = document.getElementsByClassName("carrossel-seta left")[0]; // Obtém a seta esquerda do carrossel
var rightArrow = document.getElementsByClassName("carrossel-seta right")[0]; // Obtém a seta direita do carrossel

leftArrow.addEventListener("click", function() { // Adiciona um ouvinte de evento de clique à seta esquerda
  showSlide(-1); // Chama a função showSlide passando -1 como argumento para retroceder para o slide anterior
});
rightArrow.addEventListener("click", function() { // Adiciona um ouvinte de evento de clique à seta esquerda
  showSlide(+1); // Chama a função showSlide passando -1 como argumento para retroceder para o slide anterior
});