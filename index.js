const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 4000;

let clients = [
  { id: 1, name: "John Doe", age: 30, email: "john@doe.com" },
  { id: 2, name: "Jane Doe", age: 28, email: "jane@doe.com" },
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

const newClient = (client) => {
  const newClient = {
    ...client,
    id: clients.length,
  };
  clients.push(newClient);
  return newClient;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "aprendiendo vue", {
    expiresIn: maxAge,
  });
};

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (us) => us.email === email && us.password === password
  );
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  const token = createToken(user.id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
  console.log(token);
  res.status(200).json({ user, token });
  return;
});

app.post("/checkToken", (req, res) => {
  try {
    const payload = jwt.verify(req.body.token, "aprendiendo vue")
    console.log(payload)
    if (payload) {
      return res.status(200).json({ success: true })
    } else {
      return res.status(401).json({ success: false })
    }
  } catch(e) {
    // console.error(e)
    return res.status(401).json({ success: false })
  }
})

app.post("/clients", (req, res) => {
  const { client, action } = req.body;
  if (action === "create") {
    console.log(req.body);
    const user = newClient(client);
    const token = createToken(user.id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ message: "Client created successfully" });
    return;
  }
  if (action === "get") {
    res.json(clients);
    return;
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
