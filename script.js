// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = document.querySelector("#password-length")
var includeLower = document.querySelector("#include-lowercase")
var includeUpper = document.querySelector("#include-uppercase")
var includeNums = document.querySelector("#include-numbers")
var includeSymbols = document.querySelector("#include-symbols")
var hidePassword = document.querySelector("#hide-password")
var copyBtn = document.querySelector("#copy-btn")
var passwordText = document.querySelector("#password");

console.log(hidePassword)

// declaring all necessary variables
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ":", ";", "[", "]", "{", "}", "/", "-", "_"]
var passwordCharacters

// Write password to the #password input
function writePassword() {
  validateLength();
  userChoices();

  var password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword)


// function to prompt user to choose the length of their password
function validateLength(){
  if (!passwordLength.value) {
    alert("Invalid input, password must be a number between 8 - 128 characters")
  }
  // if user enters something other than a number, display invalid input message, start over
  else if (isNaN(passwordLength.value)) {
    alert("Invalid input, password must be a number between 8 - 128 characters")
  }
  // if password is smaller than 8, alert user password must be 8 or more characters, start over
  else if(passwordLength.value < 8) {
    alert("Password must be at least 8 characters")
  }
  // if password is larger than 128, alert user password must be no more than 128 characters, start over
  else if(passwordLength.value > 128) {
    alert("Password cannot be more than 128 characters")
  }
      
  return
}
// function to prompt user on what types of characters they want to include in thier password
function userChoices(){
  // set passwordCharacters to empty array so we can concat on other arrays based on user choices
  passwordCharacters = []
  // if user selects to include lower case concat lower case array in to passwordCharacters
  if (includeLower.checked) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
  }
  // if user selects to include lower case concat upper case array in to passwordCharacters 
  if (includeUpper.checked) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters);
  }
  
  // if user selects to include lower case concat numbers array in to passwordCharacters 
  if (includeNums.checked) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  // if user selects to include lower case concat symbols array in to passwordCharacters 
  if (includeSymbols.checked) {
    passwordCharacters = passwordCharacters.concat(symbols);
  }
  // if user doesn't select any, alert them, tell them to choose at least one. Also if the use didn't enter a valid password length, we don't want to prompt them twice, so only show this alert if they entered a valid password length
  if (!includeLower.checked && !includeUpper.checked && !includeNums.checked && !includeSymbols.checked && passwordLength.value >= 8 && passwordLength.value <= 128) {
    alert("Please choose at least one character type to include in your password.")
  }
}

// toggle function for hiding/showing the password
const setHidePassword = () => {
  console.log('side hide password')
  if (hidePassword.checked) {
    passwordText.type = "password";
  } else {
    passwordText.type = "text";    
  }
}

hidePassword.addEventListener("click", setHidePassword)

// function to generate password
function generatePassword() {
  // store generated values in new array
  var passwordArr = []
  // generate random values, push them into passwordArr
  for (var i = 0; i < passwordLength.value; i++) {
    passwordArr.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
  }
  // turn generated values into a string, return string
  password = passwordArr.join("")
  return password;
}

function copyPassword() {
  passwordText.select();
  passwordText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(passwordText.value);
}