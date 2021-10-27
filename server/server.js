const express = require("express");
const path = require("path");
const app = express();
const randomId = require("random-id");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../ui/build")));

let items = [
  { id: 0, name: "Sample Item 1", quantity: 1 },
  { id: 1, name: "Sample Item 2", quantity: 2 },
];

app.get("/api/item", (req, res) => {
  res.json(items);
});

app.post("/api/item", (req, res) => {
  const itemCredentials = req.body.item;

  const item = {
    id: items.length,
    name: itemCredentials.name,
    quantity: itemCredentials.quantity,
  };
  items.push(item);

  res.json({ success: true, message: "Item added succesfully!", item: item });
});

app.put("/api/item", (req, res) => {
  const newItem = req.body.item;
  let index = -1;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.id === newItem.id) {
      index = i;
      break;
    }
  }

  if (index < 0) {
    res.json({ success: false, message: "Item not found!" });
    return;
  }

  items[index].name = newItem.name;
  items[index].quantity = newItem.quantity;

  res.json({ success: true, message: "Item updated succesfully!" });
});

app.delete("/api/item/:id", (req, res) => {
  const idToDelete = req.params.id;
  let index = -1;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.id === idToDelete) {
      index = i;
      break;
    }
  }

  if (index < 0) {
    res.json({ success: false, message: "Item not found!" });
    return;
  }

  items.splice(index, 1);

  res.json({ success: true, message: "Item deleted succesfully!" });
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
