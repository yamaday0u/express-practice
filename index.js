const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const birds = require("./birds");

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.use('/birds', birds);