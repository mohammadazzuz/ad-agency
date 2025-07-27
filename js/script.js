
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transition = "opacity 1s ease";

    setTimeout(() => {
      card.style.opacity = 1;
    }, 300 * index);
  });
});
