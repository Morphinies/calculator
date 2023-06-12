const btns = document.getElementsByClassName("btn");

function handleClick(btn) {
  console.log(btn.innerHTML);
}

for (let btn of btns) {
  btn.addEventListener("click", () => handleClick(btn));
}
