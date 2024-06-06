/** Interface Director */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/** Interface Teacher */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


class Director implements DirectorInterface {
  constructor() {/**/}

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  constructor() {/**/}

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * Creates new object of some class(TEACHER or DIRECTOR)
 * @param salary Can be a string or a number
 * @returns a new Teacher or a new Director
 */
function createEmployee(salary: string | number): Teacher | Director {
  if (typeof salary === 'string' || (typeof salary === 'number' && salary >= 500)) {
    return new Director();
  }
  return new Teacher();
}

function executeWork(employee: Teacher | Director) {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}


console.log(createEmployee(200)); //Teacher
console.log(createEmployee(1000)); //Director
console.log(createEmployee('$500')); //Director
executeWork(createEmployee(200)); //Getting to work
executeWork(createEmployee(1000)); //Getting to director tasks
console.log(isDirector(createEmployee(200))); //false
console.log(isDirector(createEmployee(1000))); //true
console.log(teachClass('Math')); //Teaching Math
console.log(teachClass('History')); //Teaching History