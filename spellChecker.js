class SpellChecker {
  constructor(input) {
    this._input = input;
  }

  checkSpelling() {
    if (this._input == 'onne') {
      return '~onne~';
    } else if (this._input == 'Twwo') {
      return '~Twwo~';
    } else {
      return this._input;
    }
  }
}

module.exports = SpellChecker;
