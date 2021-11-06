// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//User-generated values
var pwLength;
var pwChars;

//Established messages (string variables) for the program prompts/confirmations
var confirm1 =
  "Please include AT LEAST ONE of the following in your password: Lowercase letters, uppercase letters, numeric values, and/or special characters.";
var selectChars = "These will be included in your password.";
var confirmLC = "Would you like to include lowercase letters?";
var confirmUC = "Would you like to include uppercase letters?";
var confirmNum = "Would you like to include numbers?";
var confirmSpec =
  "Would you like to include special characters (such as !, #, %, &, etc.; does not include spaces)?";

//Values confirming user selection for characters
var LC;
var UC;
var Num;
var Spec;

//Possible character values to select (as an array)
var charLC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var charUC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpec = [
  "!",
  "'",
  "#",
  '"',
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "|",
];

//List of special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

//Math.random = Completely random number generator
//Math.floor = Establishes opportunity to set parameters for "random"
//.length: Sets parameters based on length of variable given (here lowercase)

var randomLC = Math.floor(Math.random() * charLC.length);
console.log(randomLC);

//Sets the random number generator to one of the given character options

var pwLC = charLC[randomLC];
console.log(charLC);

//Repeats the above for uppercase, numbers, and special characters (with console.log tests)

var randomUC = Math.floor(Math.random() * charUC.length);
console.log(randomUC);

var pwUC = charUC[randomUC];
console.log(charUC);

var randomNum = Math.floor(Math.random() * charNum.length);
console.log(randomNum);

var pwNum = charNum[randomNum];
console.log(charNum);

var randomSpec = Math.floor(Math.random() * charSpec.length);
console.log(randomSpec);

var pwSpec = charSpec[randomSpec];
console.log(charSpec);

/*
while (true) {
  pwLength = Number(
    prompt("Please enter a password length from 8 to 128 characters:")
  );
  if (pwLength < 8 || pwLength > 128) {
    alert("You must enter a valid number.");
    continue;
  } else {
    alert("Your password will be " + pwLength + " characters long.");
  }
  while (true) {
    if (!confirm(confirm1)) {
      continue;
    }
    LC = confirm(confirmLC);
    if (LC) {
      alert(selectChars);
    }
    UC = confirm(confirmUC);
    if (UC) {
      alert(selectChars);
    }
    Num = confirm(confirmNum);
    if (Num) {
      alert(selectChars);
    }
    Spec = confirm(confirmSpec);
    if (Spec) {
      alert(selectChars);
    }
    if (!LC && !UC && !Num && !Spec) {
      continue;
    } else {
      break;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/
