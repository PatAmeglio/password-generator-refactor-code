// Assignment code here
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<', '>', '/', '?', ';', ':', '~', '"', '[', ']', '{', '}', '*', '-', '=', '|', ',', '.'];
var characters = [];
var password = [];
var userConfirm = (true);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  password = []
  var length = window.prompt("Choose a password length between 8-128");

  if (length > 7 && length < 129) {

     userConfirm = window.confirm ("Great! Would you like to include Lower Case Letters?");
      if (userConfirm == true) {
        characters = characters.concat(lowerCase);
      }

      userConfirm = window.confirm ("Great! Would you like to include Upper Case Letters?");
      if (userConfirm == true) {
        characters = characters.concat(upperCase);
      }

      userConfirm = window.confirm ("Great! Would you like to include Numbers?");
      if (userConfirm == true) {
        characters = characters.concat(numbers);
      }

      userConfirm = window.confirm ("Great! Would you like to include Special Characters?");
      if (userConfirm == true) {
        characters = characters.concat(specialCharacters)
      }
  
      else if(characters == 0) {
       window.alert("At least one character must be chosen to create a password.");
    }

  }

  else {
    window.alert ("That number is not between 8-128! Try again by clicking the Generate Password");
  }


for (let i=0; i < length; i++) { 

password.push(characters[Math.floor(Math.random() * characters.length)]);

}

  var passwordBox = document.querySelector("#password");

  passwordBox.value = password.join("");

})
