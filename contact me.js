const form = document.getElementById("contact-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
  errorMessage.textContent = "";

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  if (!name || !email || !message) {
    event.preventDefault();
    errorMessage.textContent = "All fields are required.";
  }
});
