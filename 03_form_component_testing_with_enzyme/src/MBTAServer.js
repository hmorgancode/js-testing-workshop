export function fetch() {
  return new Promise(resolve => setTimeout(() => resolve('Broken'), 1000));
}
