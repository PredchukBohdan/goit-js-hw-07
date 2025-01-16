(() => {
  const input = document.getElementById("name-input");
  const outputElement = document.getElementById("name-output");

  function updateGreeting() {
    const value = input.value.trim();
    if (value === "") {
      outputElement.textContent = "Anonymous";
    } else {
      outputElement.textContent = value;
    }
  }
  input?.addEventListener("input", updateGreeting);
})();
