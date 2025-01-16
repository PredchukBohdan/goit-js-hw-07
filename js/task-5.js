(() => {
  const button = document.querySelector(".change-color");
  const textColorElem = document.querySelector(".color");

  button?.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    setColor(randomColor);
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  function setColor(color) {
    if (!color) return;
    document.body.style.backgroundColor = color;
    textColorElem.textContent = color;
  }
})();
