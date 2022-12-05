const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("menu");

openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  nav.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  nav.classList.toggle("hidden");
});

// Carousel on Mobile

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return ` <span class="carousel-btn border-2 border-brightRed cursor-pointer"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
    <div class=" w-full absolute bottom-0 left-0  py-5 md:hidden space-x-2">
      ${buttonsHtml.join("")}
  </div>
  `
  );

  const buttons = carousel.querySelectorAll(".carousel-btn");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // Unselect all the items
      items.forEach((item) => item.classList.remove("carousel-item-selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel-btn-selected")
      );

      items[i].classList.add("carousel-item-selected");
      button.classList.add("carousel-btn-selected");
    });
  });
});
