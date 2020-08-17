const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};
const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
const calculator = {
  add: (n1, n2) => Math.trunc(n1 + n2),
  mult: (n1, n2) => Math.trunc(n1 * n2),
  div: (n1, n2) => Math.trunc(n1 / n2),
  sub: (n1, n2) => Math.trunc(n1 - n2),
};

console.log(calculator.add(1, 3));
// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);
