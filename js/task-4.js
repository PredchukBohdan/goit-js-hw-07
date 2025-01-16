(() => {
  const form = document.querySelector(".login-form");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const { email, password } = form.elements;
    const emailValue = email.value.trim();
    const emailPassword = password.value.trim();

    if (!emailValue || !emailPassword) {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: emailValue,
      password: emailPassword,
    };
    console.log(formData);

    form.reset();
  });
})();
