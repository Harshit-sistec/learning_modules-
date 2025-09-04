const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let students = []; // In-memory storage
let idCounter = 1;

// CREATE a student
app.post('/students', (req, res) => {
  const { name, age, grade } = req.body;
  const student = { id: idCounter++, name, age, grade };
  students.push(student);
  res.status(201).json(student);
});

// READ all students
app.get('/students', (req, res) => {
  res.json(students);
});

// READ one student
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.json(student);
});

// UPDATE a student
app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ error: 'Student not found' });

  const { name, age, grade } = req.body;
  student.name = name || student.name;
  student.age = age || student.age;
  student.grade = grade || student.grade;

  res.json(student);
});

// DELETE a student
app.delete('/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Student not found' });

  const deleted = students.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
