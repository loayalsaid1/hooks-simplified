import { useState } from 'react';

/**
 * @function useArray
 * @description A hook that returns a stateful array, as well as functions to
 *  push, unshift, update, remove, clear, and filter elements in the array.
 * @param {Array} defaultValue The default value of the array.
 * @returns {Array} The stateful array.
 * @returns {Object} An object with the following properties:
 *  - set: A function to set the value of the array.
 *  - unshift: A function to add an element to the begenning of the array.
 *  - push: A function to add an element to the end of the array.
 *  - update: A function to update an element at a given index in the array.
 *  - remove: A function to remove an element at a given index from the array.
 *  - clear: A function to clear the array.
 *  - filter: A function to filter the array.
 */
export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(item) {
    setArray((array) => [...array, item]);
  }

  function unshift(item) {
    setArray((array) => [item, ...array]);
  }

  function update(index, item) {
    setArray((array) => {
      const copy = [...array];
      copy[index] = item;
      return copy;
    });
  }

  function remove(index) {
    setArray((array) => [...array.slice(0, index), ...array.slice(index + 1)]);
  }

  function clear() {
    setArray([]);
  }

  function filter(callback) {
    setArray((array) => array.filter(callback));
  }

  return [
    array,
    { set: setArray, push, unshift, update, remove, clear, filter },
  ];
}
