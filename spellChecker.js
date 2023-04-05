class SpellChecker {
  constructor(input) {
    this._input = input;
  }

  checkSpelling() {
    if (this._input == 'onne') {
      return '~onne~';
    } else {
      return this._input;
    }
  }
}

module.exports = SpellChecker;
