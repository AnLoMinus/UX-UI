const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    button.textContent = "Updated";
  });
}
