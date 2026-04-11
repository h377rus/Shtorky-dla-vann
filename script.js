const header = document.getElementById("mainHeader");

const colors = ["color1", "color2", "color3"];
let current = 0;

header.addEventListener("click", function () {
  header.classList.remove(colors[current]);
  current = (current + 1) % colors.length;
  header.classList.add(colors[current]);
});