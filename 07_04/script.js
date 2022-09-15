/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const arrayExercise = ["legal pad", "tape", "telephone", "desk", 77, "candle", "monitor"];

// arrayExercise.unshift(arrayExercise.pop());

// arrayExercise.sort();

const foundItem = arrayExercise.find(item => item === "telephone");

console.log("found item" ,foundItem);

