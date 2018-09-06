// Using the JavaScript language, have the function LetterChanges(str) take
// the str parameter being passed and modify it using the following algorithm:

// Replace every letter in the string with the letter following it
// in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u)
// and finally return this modified string.

// Test case:
// 'hello*3 => Ifmmp*3

function LetterChanges(str) {
  const letterShift = str.replace(/[a-z]/gi, (char) => {
    return char === 'z' || char === 'Z'
      ? 'a'
      : String.fromCharCode(char.charCodeAt() + 1)
  })

  const finalStr = letterShift.replace(/a|e|i|o|u/gi, (vowel) =>
    vowel.toUpperCase()
  )

  return finalStr
}

// Do not change code below this line.
LetterChanges('hello*3')
