const express = require("express");
const path = require("path");
const app = express();
const randomId = require("random-id");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../ui/build")));

let items = [
  { name: "one", quantity: 1 },
  { name: "two", quantity: 2 },
];

app.get("/api/users", (req, res) => {
  console.log("api/users called!");
  res.json(items);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
