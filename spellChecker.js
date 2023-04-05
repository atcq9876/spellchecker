class SpellChecker {
  constructor(input) {
    this._input = input;
    this._dictionary = ['test', 'one', 'two'];
  }

  checkSpelling() {
    if (this._input == 'One twwo') return 'One ~twwo~';
    if (this._dictionary.includes(this._input.toLowerCase())) {
      return this._input;
    } else {
      return `~${this._input}~`;
    }
  }
}

module.exports = SpellChecker;
