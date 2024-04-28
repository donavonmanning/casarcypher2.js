const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

function encryptMessage(word, shift) {
    let encryptedMessage = "";
    for (let i = 0; i < word.length; i++) {
      const encryptedLetter = encryptLetter(word[i], shift);
      encryptedMessage += encryptedLetter;
    }
    return encryptedMessage;
  }

  function caesarCipher(text, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    
    return text.replace(/[a-z]/gi, function(char) {
        const index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) return char; // If char is not a letter
        const isUpperCase = char === char.toUpperCase();
        const shiftedChar = shiftedAlphabet[index];
        return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    });
}

const friend = "BRUTUS";
const shiftValue = 3;
const encryptedMessage = caesarCipher(friend, shiftValue);
console.log(encryptedMessage); // Outputs: EUXWXV


  function decryptLetter(encryptedLetter, shift) {
    const index = alphabet.indexOf(encryptedLetter.toLowerCase());
    let newIndex = (index - shift) % alphabet.length;
    if (newIndex < 0) {
      newIndex += alphabet.length; // Handle negative values correctly
    }
    return alphabet[newIndex];
  }
  
  function decryptMessage(encryptedWord, shift) {
    let decryptedMessage = "";
    for (let i = 0; i < encryptedWord.length; i++) {
      const decryptedLetter = decryptLetter(encryptedWord[i], shift);
      decryptedMessage += decryptedLetter;
    }
    return decryptedMessage;
  }
  

  