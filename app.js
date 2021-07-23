const colors = ["green", "crimson", "darkblue", "aqua", "lightcoral"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNumber = genRandomNum();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function genRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
