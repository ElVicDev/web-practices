const passwords = [
  "Password123",
  "short",
  "ValidPass123",
  "too_long_password_example",
  "12345",
];

function validatePasswords(passwords) {
  const regex = /^[a-zA-Z0-9]{8,20}$/;
  for (let i = 0; i < passwords.length; i++) {
    if (regex.test(passwords[i])) {
      console.log(`${passwords[i]} es válida.`);
    } else {
      console.log(`${passwords[i]} es inválida.`);
    }
  }
}

validatePasswords(passwords);
