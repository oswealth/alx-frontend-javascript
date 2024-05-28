export function taskFirst() {
    // Declare task as a constant because its value does not change
    const task = 'I prefer const when I can.';
    return task;
  }
  
  // Function to return a string
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    // Declare combination using let because its value will change
    let combination = 'But sometimes let';
    combination += getLast(); // Modify the value of combination
  
    return combination;
  }