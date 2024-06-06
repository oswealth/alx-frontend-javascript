/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    export class React extends Subject {
      getRequirements() {
        return 'Here is the list of requirements for React';
      }
      getAvailableTeacher() {
        if (!this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact === 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
