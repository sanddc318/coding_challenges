/*
  Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the   string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

  Test cases:
  "Argument goes here" => "Argument"
  "fun&!! times" => "times"
  "123456789 1234" => "123456789"
*/

function LongestWord(sen) {
  const arrSen = sen.split(' ')

  return arrSen
    .map((str) => str.replace(/[^a-zA-Z0-9]+/g, ''))
    .reduce((curr, next) => curr.length >= next.length ? curr : next) // prettier-ignore
}

LongestWord('fun&!! times')
