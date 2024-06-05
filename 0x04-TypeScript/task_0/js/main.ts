interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: "Osbert",
    lastName: "Bertson",
    age: 20,
    location: "Accra"
  };

  const student2: Student = {
    firstName: "Mavis",
    lastName: "Ampim",
    age: 22,
    location: "New York"
  };

  const studentsList: Student[] = [student1, student2];

  // Create the table
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

    // Create table headers
  const headerRow = document.createElement("tr");
  const headerFirstName = document.createElement("th");
  const headerLocation = document.createElement("th");

  headerFirstName.textContent = "First Name";
  headerLocation.textContent = "Location";

  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  tbody.appendChild(headerRow);

  // Append a new row for each student
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
