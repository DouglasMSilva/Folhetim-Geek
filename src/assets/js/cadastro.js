//Campo Nome
let nameInput = document.querySelector("#nameInput");
let nameSpan = document.querySelector("#nameSpan");

nameInput.addEventListener("input", function () {
  let nome = this.value;
  if (nome.length <= 3) {
    console.log("teste");

    nameInput.style.borderColor = "red";
    nameSpan.style.color = "red";
    nameSpan.style.display = "block";
    nameSpan.textContent = "Nome deve ter no mínimo 3 caracteres.";
  } else {
    nameInput.style.borderColor = "green";
    nameSpan.style.display = "none";
  }
});
// Campo E-mail
let emailInput = document.querySelector("#emailInput");
let emailSpan = document.querySelector("#emailSpan");

emailInput.addEventListener("input", function () {
  let email = this.value;
  let re = /\S+@\S+\.\S+/;

  if (email.length >= 8 && re.test(email)) {
    emailInput.style.borderColor = "green";
    emailSpan.style.color = "green";
    emailSpan.style.display = "block";
    emailSpan.textContent = "E-mail válido.";
  } else {
    emailInput.style.borderColor = "red";
    emailSpan.style.color = "red";
    emailSpan.textContent = "E-mail inválido.";
    emailSpan.style.display = "block";
  }
});

//Campo senha
let passwordInput = document.querySelector("#passwordInput");
let passwordSpan = document.querySelector("#passwordSpan");

passwordInput.addEventListener("input", function () {
  password = this.value;

  if (password.length <= 8) {
    passwordInput.style.borderColor = "red";
    passwordSpan.style.color = "red";
    passwordSpan.textContent = "Senha deve ter no mínimo 8 caracteres.";
    passwordSpan.style.display = "block";
  } else {
    passwordInput.style.borderColor = "green";
    passwordSpan.style.color = "green";
    passwordSpan.style.display = "none";
  }
});

//Campo confirmar senha
let confirmPasswordInput = document.querySelector("#confirmPasswordInput");
let confirmPasswordSpan = document.querySelector("#confirmPasswordSpan");

confirmPasswordInput.addEventListener("input", function () {
  confPassword = this.value;

  if (confPassword == passwordInput.value) {
    confirmPasswordInput.style.borderColor = "green";
    confirmPasswordSpan.style.color = "green";
    confirmPasswordSpan.style.display = "none";
  } else {
    confirmPasswordInput.style.borderColor = "red";
    confirmPasswordSpan.style.color = "red";
    confirmPasswordSpan.textContent = "As senhas não são idênticas";
    confirmPasswordSpan.style.display = "block";
  }
});
