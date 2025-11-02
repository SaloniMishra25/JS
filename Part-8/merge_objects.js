// Q5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of both the first object and the second object.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ name: "Saloni" }, { age: 22 }));
// Output: {name: "Saloni", age: 22}
