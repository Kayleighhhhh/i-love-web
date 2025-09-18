document.querySelectorAll(".menu").forEach(menu => {
  const button = menu.querySelector(".button-nav");
  const nav = menu.querySelector(".nav");

  button.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});