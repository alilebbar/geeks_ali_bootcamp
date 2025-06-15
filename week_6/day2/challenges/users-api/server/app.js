const express = require('express');
const app = express();
const userRoutes = require('./server/routes/userRoutes');

app.use(express.json());
app.use('/', userRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); 