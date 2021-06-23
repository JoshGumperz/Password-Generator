// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ":", ";", "[", "]", "{", "}", "/", "-", "_"]
var passwordLength
var includeLower
var includeUpper
var includeNums
var includeSymbols
// Write password to the #password input
function writePassword() {
  length();
  lower();
  upper();
  includeNumbers();
  specialChars();



  var password = generatePassword(passwordLength, includeLower, includeUpper, includeNums, includeSymbols);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function length(){
  passwordLength = prompt("How many characters do you want your password to be? Minimum length: 8 characters. Maximum length: 128 characters.")
      if(passwordLength < 8) {
        alert("Password must be at least 8 characters")
        length();
      }
      else if(passwordLength > 128) {
        alert("Password cannot be more than 128 characters")
        length();
      }
      else if(passwordLength != null) {
        return passwordLength;
      }
}

function lower(){
  includeLower = confirm("Click Ok to include lower case letters in your password.")
  return includeLower;
}

function upper(){
  includeUpper = confirm("Click Ok to include upper case letters in your password.")
  return includeUpper;
}

function includeNumbers(){
  includeNums = confirm("Click Ok to include numbers in your password.")
  return includeNums;
}

function specialChars(){
  includeSymbols = confirm("Click Ok to include symbols/special characters letters in your password.")
  return includeSymbols;
}