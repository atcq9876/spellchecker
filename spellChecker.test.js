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

  test(('throws error if input is not a string'), () => {
    expect(() => {
      new SpellChecker(10);
    }).toThrow('Input must be a string');
  })

  test(('throws error if input is an empty string'), () => {
    expect(() => {
      new SpellChecker('');
    }).toThrow('No input has been supplied');
  })

  it('handles multiple spaces between words', () => {
    const spellChecker = new SpellChecker('Test      two  incorrectt');
    
    expect(spellChecker.checkSpelling()).toEqual('Test two ~incorrectt~');
  })

  it('handles input containing punctuation', () => {
    const spellChecker = new SpellChecker('One, two. blah');
    
    expect(spellChecker.checkSpelling()).toEqual('One, two. ~blah~');
  })
})
