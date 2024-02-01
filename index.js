require("dotenv").config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const route = require('./routes');
const mongodb = require('./config/config');
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3000;


const app = express();


app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use('/uploads', express.static("uploads"));
app.use(route)

mongodb();




app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
