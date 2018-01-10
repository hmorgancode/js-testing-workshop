import { add, makeArray, getHelloWorldAfter1Second } from '.';

describe('very contrived examples', () => {
  describe('add', () => {
    it('should return the sum of the first two arguments', () => {
    });

    it('should return the sum of the first two arguments (floating-point version)', () => {
      // 0.2 + 0.1
    });
  });

  describe('makeArray', () => {
    it('should return an array of all arguments', () => {
    });
  });

  describe('getHelloWorldAfter1Second - with Promises', () => {
    it('should do what it says on the tin', () => {
      expect.assertions(1);
    });
  });

  describe('getHelloWorldAfter1Second - with Async/Await', () => {
    it('should do what it says on the tin', async () => {
      expect.assertions(1);
    });
  });
});
