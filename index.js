const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

let clients = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 28 },
];

app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    email: "prueba@gmail.com",
    password: "123456789",
    username: "primero",
  },
  {
    id: 2,
    email: "prueba2@gmail.com",
    password: "123456789",
    username: "segundo",
  },
  {
    id: 3,
    email: "prueba3@gmail.com",
    password: "123456789",
    username: "tercero",
  },
];

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (us) => us.email === email && us.password === password
  );
  res.status(200).json({ user });
});

app.post("/clients", (req, res) => {
  const client = req.body;
  console.log(req.body);
  clients.push(client);
  res.status(201).json({ message: "Client created successfully" });
});

app.get("/clients", (req, res) => {
  res.json(clients);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
