// Assignment Code
var generateBtn = document.querySelector("#generate");
// declaring all necessary variables
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ":", ";", "[", "]", "{", "}", "/", "-", "_"]
var passwordCharacters
var passwordLength
var includeLower
var includeUpper
var includeNums
var includeSymbols

// Write password to the #password input
function writePassword() {
  userLengthChoice();
  userChoices();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to prompt user to choose the length of their password
function userLengthChoice(){
  passwordLength = prompt("How many characters do you want your password to be? Minimum length: 8 characters. Maximum length: 128 characters.")
      // if user hits cancel, end function here
      if (!passwordLength) {
        return
      }
      // if user enters something other than a number, display invalid input message, start over
      else if (isNaN(passwordLength)) {
        alert("Invalid input, password must be a number between 8 - 128 characters")
        userLengthChoice();
      }
      // if password is smaller than 8, alert user password must be 8 or more characters, start over
      else if(passwordLength < 8) {
        alert("Password must be at least 8 characters")
        userLengthChoice();
      }
      // if password is larger than 128, alert user password must be no more than 128 characters, start over
      else if(passwordLength > 128) {
        alert("Password cannot be more than 128 characters")
        userLengthChoice();
      }
      
      return
}
// function to prompt user on what types of characters they want to include in thier password
function userChoices(){
  // set passwordCharacters to empty array so we can concat on other arrays based on user choices
  passwordCharacters = []
  // if user hit cancel when prompted to enter desired password length, we don't want this code to execute
  if(passwordLength !== null) {
    includeLower = confirm("Click Ok to include lower case letters in your password.")
    // if user selects to include lower case concat lower case array in to passwordCharacters
      if (includeLower) {
        passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
      }

    includeUpper = confirm("Click Ok to include upper case letters in your password.")
    // if user selects to include lower case concat upper case array in to passwordCharacters 
      if (includeUpper) {
        passwordCharacters = passwordCharacters.concat(upperCaseLetters);
      }

    includeNums = confirm("Click Ok to include numbers in your password.")
    // if user selects to include lower case concat numbers array in to passwordCharacters 
      if (includeNums) {
        passwordCharacters = passwordCharacters.concat(numbers);
      }

    includeSymbols = confirm("Click Ok to include symbols/special characters letters in your password.")
    // if user selects to include lower case concat symbols array in to passwordCharacters 
      if (includeSymbols) {
        passwordCharacters = passwordCharacters.concat(symbols);
      }
    // if user doesn't select any, alert them, tell them to choose at least one, then start over
      else if (!includeLower && !includeUpper && !includeNums && !includeSymbols) {
        alert("Please choose at least one character type to include in your password.")
        userChoices();
      }
  }
  else {
    return;
  }
}
// function to generate password
function generatePassword() {
  // store generated values in new array
  var passwordArr = []
  // generate random values, push them into passwordArr
    for (var i = 0; i < passwordLength; i++) {
      passwordArr.push( passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
    }
  // turn generated values into a string, return string
  password = passwordArr.join("")
    return password;
}

