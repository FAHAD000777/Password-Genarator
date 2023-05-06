const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const strongChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{};:,.<>?";
const funnyChars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789!@#$%&*+-=";

function generatePassword(type) {
  let chars = "";
  switch (type) {
    case "normal":
      chars = normalChars;
      break;
    case "strong":
      chars = strongChars;
      break;
    case "funny":
      chars = funnyChars;
      break;
  }
  let password = "";
  for (let i = 0; i < 18; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

const generateBtn = document.getElementById("generate-btn");
const passwordField = document.getElementById("password-field");
const copyBtn = document.getElementById("copy-btn");

generateBtn.addEventListener("click", () => {
  const type = document.querySelector('input[name="password-type"]:checked').value;
  const password = generatePassword(type);
  passwordField.value = password;
  copyBtn.disabled = false;
});

copyBtn.addEventListener("click", () => {
  passwordField.select();
  document.execCommand("copy");
  copyBtn.innerHTML = "Copied!";
  setTimeout(() => {
    copyBtn.innerHTML = "Copy Password";
  }, 1500);
});
