export function add(a, b) {
  return a + b;
}

export function makeArray() {
  return [...arguments];
}

export function getHelloWorldAfter1Second() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Hello, world!'), 1000);
  });
}
