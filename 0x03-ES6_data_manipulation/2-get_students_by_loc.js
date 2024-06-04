export default function getStudentsByLocation(students, city) {
  // Use the filter function to extract students located in the specified city
  return students.filter((student) => student.location === city);
}
