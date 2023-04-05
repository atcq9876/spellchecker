const SpellChecker = require('./spellChecker');

describe('SpellChecker', () => {
  it('outputs a correctly spelt word', () => {
    const spellChecker = new SpellChecker('test');
    
    expect(spellChecker.checkSpelling()).toEqual('test');
  })

  it('highlights an incorrectly spelt word', () => {
    const spellChecker = new SpellChecker('onne');
    
    expect(spellChecker.checkSpelling()).toEqual('~onne~');
  })

  it('highlights a second incorrectly spelt word', () => {
    const spellChecker = new SpellChecker('Twwo');
    
    expect(spellChecker.checkSpelling()).toEqual('~Twwo~');
  })

  it('handles a two word string', () => {
    const spellChecker = new SpellChecker('One twwo');
    
    expect(spellChecker.checkSpelling()).toEqual('One ~twwo~');
  })

  it('handles another two word string', () => {
    const spellChecker = new SpellChecker('Test two');
    
    expect(spellChecker.checkSpelling()).toEqual('Test two');
  })

  it('handles another three word string', () => {
    const spellChecker = new SpellChecker('Test two incorrectt');
    
    expect(spellChecker.checkSpelling()).toEqual('Test two ~incorrectt~');
  })
})
