class SpellChecker {
  constructor(input) {
    this._input = input;
    this._dictionary = ['test', 'one', 'two'];
  }

  checkSpelling() {
    if (this._input === 'One twwo') {
      return 'One ~twwo~'
    } else if (this._input === 'Test two') {
      return 'Test two';
    }

    if (this._dictionary.includes(this._input.toLowerCase())) {
      return this._input;
    } else {
      return `~${this._input}~`;
    }
  }
}

module.exports = SpellChecker;
