// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersUpperlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lettersLowerlist = "abcdefghijklmnopqrstuvwxyz"
var specialCharacterslist = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var numericCharacterslist = "123456789"

function NumericCharacters() {
  var numeric = window.confirm("Would you like numeric characters?")
  console.log(numeric)
  return numeric;
}


function SpecialCharacters() {
  var special = window.confirm("Would you like special characters?")
  console.log(special)
  return special;
}


function LowerLetters() {
  var lower = window.confirm("Would you like lower case letters?")
  console.log(lower)
  return lower;
}


function CapitalLetters() {
  var capital = window.confirm("Would you like upper case letters?")
  console.log(capital)
  return capital;
}


function CharacterCount() {
  var count = window.prompt("How many characters would you like? (8-128)")
  console.log(count)
  return count;
}

function generatePassword() {
  var finalpassword = ""
  var count = CharacterCount()
  var capital = CapitalLetters()
  var lower = LowerLetters()
  var numeric = NumericCharacters()
  var special = SpecialCharacters()
  validation(count, capital, lower, numeric, special)
  return finalpassword;
}

function validation(count, capital, lower, numeric, special) {
  window.confirm("Does this look correct?")
  if (count >= 8 || count <= 128){
    if  (capital === true || lower === true || numeric === true || special === true){
      buildPassword(count, capital, lower, numeric, special)
    } 
  } 
}

function buildPassword(count, capital, lower, numeric, special) {
  var allCharacters = ""
  if (capital === true) {allCharacters = allCharacters.concat(lettersUpperlist)}
  if (lower === true) {allCharacters = allCharacters.concat(lettersLowerlist)}
  if (numeric === true) {allCharacters = allCharacters.concat(numericCharacterslist)}
  if (special === true) {allCharacters = allCharacters.concat(specialCharacterslist)}
  console.log(allCharacters)
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
