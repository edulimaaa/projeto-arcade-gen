document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navActions = document.querySelector(".nav-actions");

  if (hamburger && navActions) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navActions.classList.toggle("active");
    });
  }

  // Carousel
  const carousels = document.querySelectorAll(".product-carousel");

  carousels.forEach((carousel) => {
    const prevButton = carousel.querySelector(".carousel-arrow.prev");
    const nextButton = carousel.querySelector(".carousel-arrow.next");
    const productGrid = carousel.querySelector(".product-grid");

    if (prevButton && nextButton && productGrid) {
      const card = productGrid.querySelector(".product-card");
      if (!card) return;

      const scrollCarousel = () => {
        const cardStyle = window.getComputedStyle(card);
        const cardMargin =
          parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
        const cardWidth = card.offsetWidth + cardMargin;

        const gap = parseFloat(window.getComputedStyle(productGrid).gap);
        const scrollAmount = cardWidth + gap;

        nextButton.onclick = () => {
          productGrid.scrollBy({ left: scrollAmount, behavior: "smooth" });
        };

        prevButton.onclick = () => {
          productGrid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        };
      };

      scrollCarousel();
      window.addEventListener("resize", scrollCarousel); // Recalculate on resize
    }
  });
});
