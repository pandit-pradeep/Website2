const cartCount = document.getElementById("cartCount");
const addCartButtons = document.querySelectorAll(".addCart");

let count = 0;

addCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
    alert("Item added to cart!");
  });
});