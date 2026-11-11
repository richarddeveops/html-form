let signupForm = document.getElementById("signup-form");
let formMessage = document.getElementById("form-message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let nameField = signupForm.querySelector('[autocomplete="given-name"]');
    if (!nameField) {
        nameField = signupForm.querySelector('[autocomplete="name"]');
    }

    let name = nameField ? nameField.value.trim() : "there";
    formMessage.textContent = `Thanks, ${name}. Your example form is complete. Nothing was sent or saved.`;
});
