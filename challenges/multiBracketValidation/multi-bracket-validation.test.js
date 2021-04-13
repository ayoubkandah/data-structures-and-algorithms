let multiBracket=require("./multi-bracket-validation")

describe('multiBracket function', () => {
    ///------Stack----
    it('{}', () => {
        expect(multiBracket("{}")).toEqual(true)
    });
    
    it('{}(){}', () => {
        expect(multiBracket("{}(){}")).toEqual(true)
    });
    
    it('()[[Extra Characters]]', () => {
        expect(multiBracket("()[[Extra Characters]]")).toEqual(true)
    });
    it('(){}[[]]', () => {
        expect(multiBracket("(){}[[]]")).toEqual(true)
    });
    it('{}{Code}[Fellows](())', () => {
        expect(multiBracket("{}{Code}[Fellows](())")).toEqual(true)
    });

    it('[({}]](())', () => {
        expect(multiBracket("[({}]")).toEqual(false)
    });
    it('(](', () => {
        expect(multiBracket("(](")).toEqual(false)
    });

    it('{(})', () => {
        expect(multiBracket("{(})")).toEqual(false)
    });
});