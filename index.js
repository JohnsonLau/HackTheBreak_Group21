const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
let ejs = require('ejs');

app = express();

app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('schedule/index');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
