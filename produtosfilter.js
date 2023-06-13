function filterProducts() {
    var select = document.getElementById("filter-select");
    var products = document.getElementsByClassName("product");

    var selectedCategory = select.value;

    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var category = product.getAttribute("data-category");

      if (selectedCategory === "all" || selectedCategory === category) {
        product.style.display = "inline-block";
      } else {
        product.style.display = "none";
      }
    }
  }