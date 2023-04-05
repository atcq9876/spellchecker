class SpellChecker {
  constructor(input) {
    if (typeof input !== 'string') throw new Error('Input must be a string');
    if (input == '') throw new Error('No input has been supplied');
    this._input = input;
    this._dictionary = ['test', 'one', 'two'];
  }

  checkSpelling() {
    const words = this._input.split(' ');
    let outputArray = [];

    words.forEach((word) => {
      if (this._dictionary.includes(word.toLowerCase())) {
        outputArray.push(word);
      } else {
        outputArray.push(`~${word}~`);
      }
    })

    return outputArray.join(' ');
  }
}

module.exports = SpellChecker;
