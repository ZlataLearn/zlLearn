const obj1 = {};
const obj2 = obj1;

console.log('same', obj1 === obj2)

obj1.key = 'value';

console.log('obj1', obj1);
console.log('obj2', obj2);