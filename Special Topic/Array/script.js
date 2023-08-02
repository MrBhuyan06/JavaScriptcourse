const students = [
  {
    studentname: "John Doe",
    age: 18,
    id: "12345",
    gender: "Male",
  },
  {
    studentname: "Jane Smith",
    age: 17,
    id: "54321",
    gender: "Female",
  },
  {
    studentname: "Michael Johnson",
    age: 19,
    id: "67890",
    gender: "Male",
  },
  {
    studentname: "Emily Brown",
    age: 18,
    id: "09876",
    gender: "Female",
  },
  {
    studentname: "James Wilson",
    age: 20,
    id: "54321",
    gender: "Male",
  },
  {
    studentname: "Sophia Lee",
    age: 17,
    id: "78901",
    gender: "Female",
  },
  {
    studentname: "Daniel Kim",
    age: 19,
    id: "23456",
    gender: "Male",
  },
  {
    studentname: "Olivia Garcia",
    age: 18,
    id: "56789",
    gender: "Female",
  },
  {
    studentname: "William Hernandez",
    age: 20,
    id: "34567",
    gender: "Male",
  },
  {
    studentname: "Ava Martinez",
    age: 19,
    id: "89012",
    gender: "Female",
  },
];

// print all male student

let maleStudentData = students.filter((student) => {
  return student.gender.includes("Male");
});
// console.log(maleStudentData);
maleStudentData.forEach((students) => {
  console.log(students);
});
