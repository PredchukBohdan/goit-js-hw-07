(() => {
  const controls = document.querySelector("#controls");
  const numberInput = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxesWrapper = document.querySelector("#boxes");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  function createBoxes(amount) {
    let boxSize = 30;
    const boxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      boxSize += 10;
    }
    boxesWrapper.append(...boxes);
    boxesWrapper.style.opacity = 1;
  }
  function destroyBoxes() {
    boxesWrapper.replaceChildren();
    boxesWrapper.style.opacity = 0;
  }

  createButton?.addEventListener("click", () => {
    const amount = parseInt(numberInput.value, 10);

    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });
  destroyButton?.addEventListener("click", () => {
    destroyBoxes();
    numberInput.value = "";
  });
})();
