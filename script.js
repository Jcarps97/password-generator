// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersUpperlist= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLowerlist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacterslist = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericCharacterslist = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
  parseInt(count);
  console.log(count)
  return count;
}


function buildPassword(count, capital, lower, numeric, special) {
  var builtPassword = "";
  var allCharacters = [];
  if (capital === true) {allCharacters = allCharacters.concat(lettersUpperlist)}
  if (lower === true) {allCharacters = allCharacters.concat(lettersLowerlist)}
  if (numeric === true) {allCharacters = allCharacters.concat(numericCharacterslist)}
  if (special === true) {allCharacters = allCharacters.concat(specialCharacterslist)}
  console.log(allCharacters)
  // for loop to build final password
  for (var i = 0; i < count; i++){
    builtPassword += allCharacters[(Math.floor(Math.random() * allCharacters.length))];
  }
  return builtPassword;
}

function countValidation(count) {
  if (count >= 8 || count <= 128){
    return true;
  } else {
    return false;
  }
}


function generatePassword() {
  var count = CharacterCount()
  var capital = CapitalLetters()
  var lower = LowerLetters()
  var numeric = NumericCharacters()
  var special = SpecialCharacters()
  var validCount = countValidation(count)
  // if validCount === false: stop execution
  var finalpassword = buildPassword(count, capital, lower, numeric, special)
  return finalpassword;
}

function shuffleArray(allCharacters) {
  var randompassword = allCharacters.sort(() => Math.floor(Math.random()) - 0.5);
  randompassword.maxLength=count
  console.log(randompassword)
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
