const express = require('express');
const app = express();
const {router} = require('./server/routes/routes.js');
require('dotenv').config() ;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/books', router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});