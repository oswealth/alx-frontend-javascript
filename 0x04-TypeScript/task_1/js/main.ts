interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  

  const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  /** New class */
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);
  
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: false,
    contract: false,
  };
  
  console.log(teacher3);
  console.log(printTeacher('John', 'Doe'));
  
  const studentClass: StudentClassConstructor = StudentClass;
  const student1 = new studentClass('Wendy', 'Sulca');
  console.log(student1.workOnHomework());
  console.log(student1.displayName());
  