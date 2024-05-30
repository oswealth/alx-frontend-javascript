export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate name
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;

    // Validate length
    if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
    this._length = length;

    // Validate students
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(length) {
    if (!Number.isInteger(length)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
