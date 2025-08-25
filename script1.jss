// Get dropdown and product list
const categoryFilter = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product");

// Event Listener for Dropdown Change
categoryFilter.addEventListener("change", function () {
  const selectedCategory = this.value;

  products.forEach(product => {
    // Show all if "all" is selected OR match category
    if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
