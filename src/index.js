const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const DIGITS_TABLE = {
  '00': '',
  '10': '.',
  '11': '-'
};

function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
    const digitalSymbol = expr.slice(i, i + 10);
    if (digitalSymbol === '**********') {
      result += ' ';
    } else {
      let morseSymbol = '';
      for (let j = 0; j < digitalSymbol.length; j += 2) {
        morseSymbol += DIGITS_TABLE[digitalSymbol.slice(j, j + 2)];
      }
      result += MORSE_TABLE[morseSymbol];
    }
  }
  return result;
}

module.exports = {
    decode
}