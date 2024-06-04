export default function hasValuesFromArray(set, array) {
  // Check if all elements in the array are present in the set
  return array.every((element) => set.has(element));
}
