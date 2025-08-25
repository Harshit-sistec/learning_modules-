const student = {
  name: "harshit dubey",
  age: 19,
  rollNumber: "0187CS241079",
  department: "Computer Science",
  subjects: ["Math", "Physics", "Programming"],
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India"
  }
};


function printStudentDetails(studentObj) {
  console.log("📘 Student Details:");
  console.log("Name:", studentObj.name);
  console.log("Age:", studentObj.age);
  console.log("Roll Number:", studentObj.rollNumber);
  console.log("Department:", studentObj.department);
  console.log("Subjects:", studentObj.subjects.join(", "));
  console.log("Address:");
  console.log("  City:", studentObj.address.city);
  console.log("  State:", studentObj.address.state);
  console.log("  Country:", studentObj.address.country);
}
