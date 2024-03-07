// Map Concept:
// In JavaScript, the Map is a data structure that stores a collection of key-value pairs, where each key can be of any data type, and each value can be associated with a specific key. This data structure is similar to an object but offers some additional advantages, such as the ability to use complex data types as keys and maintaining the insertion order of elements.

// When Map is Used:
// The Map is useful in situations where you need to associate values with keys of different data types, especially when the data types of the keys are not known in advance or when the order of insertion of elements is important. Additionally, Map may be preferable in cases where you need to iterate over the elements in the order they were inserted.

// Why Map is Used:
// Key Flexibility: Map allows using any data type as a key, including objects, functions, and primitive types like numbers, strings, and symbols.

// Maintenance of Insertion Order: Elements in a Map are iterated in the order they were inserted, which can be useful in scenarios where the order of elements is important.

// Efficiency in Search Operations: Map offers efficient methods for inserting, removing, and searching for elements, making it suitable for many data manipulation operations.

// ------ Basic exercises

// --- Exercise 1:
// Create a new Map called myMap and add the following key-value pairs:

// Key: 'apple', Value: 'apple'
// Key: 'banana', Value: 'banana'
// Key: 'orange', Value: 'orange'

const myMap = new Map();
myMap.set("apple", "apple");
myMap.set("banana", "banana");
myMap.set("orange", "orange");

// --- Exercise 2:
// Write a function called displayMap that takes a Map as an argument and displays each key-value pair in the console.

const displayMap = (map) => {
  const iterator = map.entries();
  for (const item of iterator) {
    console.log(item);
  }
};
displayMap(myMap);

// -- OR

function displayMap2(map) {
  map.forEach((value, key) => {
      console.log(`${key}: ${value}`);
  });
}
displayMap2(myMap);

// --- Exercise 3:
// Write a function called findKey that takes a Map and a key as arguments and checks if the key exists in the Map. If the key exists, display the value associated with it in the console. If it doesn't exist, display the message 'Key not found'.

const findKey = (map, key) => {
  if (map.has(key)) {
    return map.get(key);
  }

  return "key not found"
};

console.log(findKey(myMap, "apple"));

// --- Exercise 4:
// Write a function called removeKey that takes a Map and a key as arguments and removes the key and its associated value from the Map if they exist.

const removeKey = (map, key) => {
  if(map.has(key)) {
    map.delete(key)
    return `${key} deleted`
  }

  return "key not found"
}

console.log(removeKey(myMap, "apple"));

// --- Exercise 5:
// Write a function called countMapEntries that takes a Map as an argument and returns the total number of entries in the Map.

const countMapEntries = (map) => {
  return map.size;
}

console.log(countMapEntries(myMap))
