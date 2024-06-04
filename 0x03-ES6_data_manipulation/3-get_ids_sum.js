export default function getStudentIdsSum(students) {
  // Use the reduce function to sum up the ids of all students
  return students.reduce((sum, student) => sum + student.id, 0);
}
