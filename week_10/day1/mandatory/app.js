const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./data/config');
const router = require('./rootes/authRootes')
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
connectDB();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/auth',router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})