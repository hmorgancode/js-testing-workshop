function add(a, b) {
  return a + b;
}

function makeArray() {
  return [...arguments];
}

function getHelloWorldAfter1Second() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Hello, world!'), 1000);
  });
}

export { add, makeArray, getHelloWorldAfter1Second };
