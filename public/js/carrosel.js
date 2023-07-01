var slideIndex = 0;
    var slides = document.getElementsByClassName("carrossel-img");
    var timer;

    function showSlide(n) {
      clearTimeout(timer);
      slideIndex += n;

      if (slideIndex >= slides.length) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }

      slides[slideIndex].classList.add("active");
      timer = setTimeout(function() {
        showSlide(1);
      }, 5000);
    }

    var leftArrow = document.getElementsByClassName("carrossel-seta left")[0];
    var rightArrow = document.getElementsByClassName("carrossel-seta right")[0];

    leftArrow.addEventListener("click", function() {
      showSlide(-1);
    });

    rightArrow.addEventListener("click", function() {
      showSlide(1);
    });

    timer = setTimeout(function() {
      showSlide(1);
    }, 5000);