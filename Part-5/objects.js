const student = {
  name: "Saloni",
  age: 22,
  course: "B.Tech",
};

console.log(student.age);

//Object of Objects

const classInfo = {
  saloni: {
    grade: 8,
    city: "Pune",
  },
  abhishek: {
    grade: 7,
    city: "Sagar",
  },
  jahnvi: {
    grade: 7,
    city: "Delhi",
  },
};

console.log(classInfo);

//Update abhishek Information
classInfo.abhishek.city = "Pune";
console.log(classInfo);

//Array of Object
const studentInfo = [
  { name: "abhishek", sem: 6, city: "sagar" },
  {
    name: "nikhil",
    sem: 6,
    city: "mumbai",
  },
  {
    name: "saloni",
    sem: "8",
    city: "Delhi",
  },
];

console.log(studentInfo);

studentInfo[2].sem = "passout";

console.log(studentInfo);
