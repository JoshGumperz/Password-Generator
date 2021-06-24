// Assignment Code
var generateBtn = document.querySelector("#generate");
// index values 0-25 are lower case letters, 26-51 upper case letters, 52-60 numbers, and 61-80 are symbols
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
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

function userLengthChoice(){
  passwordLength = prompt("How many characters do you want your password to be? Minimum length: 8 characters. Maximum length: 128 characters.")
      if (!passwordLength) {
        return
      }
      else if(passwordLength < 8) {
        alert("Password must be at least 8 characters")
        userLengthChoice();
      }
      else if(passwordLength > 128) {
        alert("Password cannot be more than 128 characters")
        userLengthChoice();
      }
      else {
        return passwordLength;
      }
}
function userChoices(){
  includeLower = confirm("Click Ok to include lower case letters in your password.")

  includeUpper = confirm("Click Ok to include upper case letters in your password.")

  includeNums = confirm("Click Ok to include numbers in your password.")

  includeSymbols = confirm("Click Ok to include symbols/special characters letters in your password.")

  if (!includeLower && !includeUpper && !includeNums && !includeSymbols) {
    alert("Please choose at least one character type to include in your password.")
    userChoices();
  }
  
  else {
    return;
  }
}