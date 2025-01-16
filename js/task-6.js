(() => {
  const controls = document.querySelector("#controls");
  const numberInput = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxes = document.querySelector("#boxes");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  function createBoxes(amount) {
    let boxSize = 30;
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      i > 1 ? (boxSize += 10) : boxSize;
      const color = getRandomHexColor();

      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = color;

      boxes.append(box);
    }
    boxes.style.opacity = 1;
  }
  function destroyBoxes() {
    boxes.replaceChildren();
    boxes.style.opacity = 0;
  }

  createButton?.addEventListener("click", () => {
    if (
      numberInput.value < 0 ||
      numberInput.value > 100 ||
      numberInput.value === ""
    ) {
      return;
    }
    destroyBoxes();
    createBoxes(numberInput.value);
  });
  destroyButton?.addEventListener("click", () => {
    numberInput.value = "";
    destroyBoxes();
  });
})();
