import { add, makeArray, getHelloWorldAfter1Second } from '.';

describe('very contrived examples', () => {
  describe('add', () => {
    it('should return the sum of the first two arguments', () => {
      expect(add(1,1)).toBe(2);
    });
  });

  describe('makeArray', () => {
    it('should return an array of all arguments', () => {
      expect(makeArray(1, 2, 3)).toEqual([1, 2, 3]);
    });
  });

  describe('getHelloWorldAfter1Second - with Promises', () => {
    it('should do what it says on the tin', () => {
      expect.assertions(1);
      // return getHelloWorldAfter1Second().then(data => expect(data).toBe('Hello, world!'));
      return expect(getHelloWorldAfter1Second()).resolves.toBe('Hello, world!');
    });
  });

  describe('getHelloWorldAfter1Second - with Async/Await', () => {
    it('should do what it says on the tin', async () => {
      expect.assertions(1);
      expect(await getHelloWorldAfter1Second()).toBe('Hello, world!');
      // await expect(getHelloWorldAfter1Second()).resolves.toBe('Hello, world!');
    });
  });
});
