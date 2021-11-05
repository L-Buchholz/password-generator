// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//The following is my HW code:

//User-generated values
var pwLength;
var pwChars;

//Established variables for the program
var confirm1 =
  "Please include AT LEAST ONE of the following in your password: Lowercase letters, uppercase letters, numeric values, and/or special characters.";
var selectChars = "These will be included in your password.";
var confirmLC = "Would you like to include lowercase letters?";
var confirmUC = "Would you like to include uppercase letters?";
var confirmNum = "Would you like to include numbers?";
var confirmSpec =
  "Would you like to include special characters (such as !, #, %, &, etc.)?";

//Values confirming user selection for characters
var LC;
var UC;
var Num;
var Spec;

while (true) {
  pwLength = Number(
    prompt("Please enter a password length from 8 to 128 characters:")
  );
  if (pwLength < 8 || pwLength > 128) {
    alert("You must enter a valid number.");
    continue;
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
