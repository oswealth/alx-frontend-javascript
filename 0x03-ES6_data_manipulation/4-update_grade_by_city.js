export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsCity = students.filter((student) => student.location === city);

  return studentsCity.map((student) => {
    const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id);

    // If a grade is found, return the student object with the grade
    if (filteredGrades.length > 0) {
      return {
        ...student,
        grade: filteredGrades[0].grade,
      };
    }

    // If no grade is found, return the student object with grade 'N/A'
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
