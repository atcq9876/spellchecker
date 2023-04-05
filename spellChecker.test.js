const SpellChecker = require('./spellChecker');

describe('SpellChecker', () => {
  it('outputs a correctly spelt word', () => {
    const spellChecker = new SpellChecker('test');
    
    expect(spellChecker.checkSpelling()).toEqual('test');
  })
})
