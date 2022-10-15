// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const symbols = "~`!@#$%^&*()_-+={}[]|;:'\",.<>/?";

/**
 * Generate event listener for generate password button click
 */
generateEl.addEventListener("click", () => {
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  // console.log(typeof length);
  // console.log(length);
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol);

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Copy password to clipboard
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

/**
 * Generate password function
 */
function generatePassword(lower, upper, number, symbol, length) {
  // 1. Initialize password variable
  // 2. Filter out unchecked types
  // 3. Loop over length and call generator function for each type
  // 4. Add final password to the password variable and return it

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;
  // console.log("typesCount: " + typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // console.log("typesArr: ", typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];

      // console.log("funcName: ", funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }

  // console.log(generatedPassword.slice(0, length));

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generator functions
// list of int values for each character http://www.net-comber.com/charset.html

/**
 * Generate random number within between min and max values, inclusive
 * @param {number} min
 * @param {number} max
 * @returns
 */
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/**
 * Generate random lowercase letter.
 * Use one of the int values for a character to create a lowercase letter.
 * Lowercase letter values range from 97 122.
 */
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/**
 * Generate random uppercase letter.
 */
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 *
 * @param {string} symbols a string of all possible symbols
 * @returns a random symbol as a string
 */
function getRandomSymbol() {
  const idx = Math.floor(Math.random() * symbols.length);
  return symbols[idx];
}

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber(0, 9));
// console.log(getRandomSymbol("!@#$%^&*()"));
