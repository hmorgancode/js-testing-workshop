import { add, makeArray, getHelloWorldAfter1Second } from '.';

describe('very contrived examples', () => {

  beforeEach(() => {

  })
  // afterEach, beforeAll, afterAll
  describe('add', () => {
    it('should return the sum of the first two arguments', () => {
      expect(add(1, 2)).toBe(3);
      // to.equal
    });

    it('should return the sum of the first two arguments (floating-point version)', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('makeArray', () => {
    it('should return an array of all arguments', () => {
      expect(makeArray(1, 2, 3)).toEqual([1, 2, 3]);
      // to.deep.equal
    });
  });

  describe('getHelloWorldAfter1Second - with Promises', () => {
    it('should do what it says on the tin', () => {
      expect.assertions(1);
      return getHelloWorldAfter1Second().then((result) => {
        expect(result).toBe('Hello, world!');
      });
    });
  });

  describe('getHelloWorldAfter1Second - with Async/Await', () => {
    it('should do what it says on the tin', async () => {
      // expect.assertions(1);
    });
  });
});
