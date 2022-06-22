const index = require('../src/index');

let object = new index();
let result;
describe('Given index is started', () => {
  describe('When example1 is called', () => {
    describe('And is passed no params', () => {
      beforeEach(() => {
        result = object.example1();
      });

      it('Then return "HOJE TALVEZ"', () => {
        expect(result).toEqual('HOJE TALVEZ');
      });
    });

    describe('And status is true', () => {
      describe('And type is true', () => {
        beforeEach(() => {
          result = object.example1(true, true);
        });
  
        it('Then return "HOJE TALVEZ"', () => {
          expect(result).toEqual('HOJE TALVEZ');
        });
      });

      describe('And type is false', () => {
        beforeEach(() => {
          result = object.example1(true, false);
        });

        it('Then return "HOJE NÃO"', () => {
          expect(result).toEqual('HOJE NÃO');
        });
      });
    });

    describe('And status is false', () => {
      describe('And type is true', () => {
        beforeEach(() => {
          result = object.example1(false, true);
        });
  
        it('Then return "HOJE SIM"', () => {
          expect(result).toEqual('HOJE SIM');
        });
      });

      describe('And type is false', () => {
        beforeEach(() => {
          result = object.example1(false, false);
        });

        it('Then return ""', () => {
          expect(result).toEqual('');
        });
      });
    });
  });

  describe('When example2 is called', () => {
    describe('And is passed an empty string', () => {
      beforeEach(() => {
        result = object.example2('');
      });
  
      it('Then return false', () => {
        expect(result).toBe(false);
      });
    });

    describe('And is passed no params', () => {
      beforeEach(() => {
        result = object.example2();
      });

      it('Then return false', () => {
        expect(result).toBe(false);
      });
    });

    describe('And is passed a param without "AAA"', () => {
      beforeEach(() => {
        result = object.example2("someLink");
      });

      it('Then return false', () => {
        expect(result).toBe(false);
      });
    });

    describe('And is passed a param with "AAA"', () => {
      beforeEach(() => {
        result = object.example2('someAAALink');
      });

      it('Then return true', () => {
        expect(result).toBe(true);
      });
    });
  });
});
