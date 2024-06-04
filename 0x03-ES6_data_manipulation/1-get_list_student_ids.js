export default function getListStudentIds(array) {
  // Check if the argument is not an array and return an empty array if so
  if (!Array.isArray(array)) return [];

  // Use the map function to extract ids from the objects in the array
  return array.map((item) => item.id);
}
