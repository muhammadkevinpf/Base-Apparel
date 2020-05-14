let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailInput = document.querySelector("#email-subscribe");
let emailValue = "";
let btnSubs = document.querySelector("#button-subscribe");
let errorDisplay = document.querySelector("#warn-error");
let iconError = document.querySelector("#icon-error");
const validateEmail = (email) => {
  return emailRegex.test(email);
};

emailInput.addEventListener("keyup", (e) => {
  emailValue = e.target.value;
});

btnSubs.addEventListener("click", () => {
  if (emailValue.length === 0 || validateEmail(emailValue) === false) {
    errorDisplay.style.display = "inline";
    iconError.style.display = "inline";
  } else {
    errorDisplay.style.display = "none";
    iconError.style.display = "none";
  }
});
