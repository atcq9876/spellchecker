class SpellChecker {
  constructor(input) {
    this.#validateInput(input);
    this._input = input;
    this._dictionary = ['test', 'one', 'two'];
  }

  checkSpelling() {
    const singleSpaceInput = this._input.replace(/  +/g, ' ');
    const words = singleSpaceInput.split(' ');
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

  #validateInput(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string')
    } else if (input == '') {
      throw new Error('No input has been supplied');
    }
  }
}

module.exports = SpellChecker;
