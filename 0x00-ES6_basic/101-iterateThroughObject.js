export default function iterateThroughObject(reportWithIterator) {
    const employees = [];
  
    for (const value of reportWithIterator) {
      employees.push(value);
    }
  
    return employees.join(' | ');
  }  