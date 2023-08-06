const friends = [3, 5, 84, 28, 11, 30, 40, 50, 20, 33, 88];
/* splice(start: number, deleteCount?: number | undefined): number[]
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted. */
const partial = friends.splice(3, 5, 22, 33, 44, 55);
console.log("Splice values: ",partial);
console.log("-------------------");
console.log("Array values: ",friends);