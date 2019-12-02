const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/1',
          'name': 'Changhwan Lee',
          'birthday': '951127',
          'gender': 'male',
          'job': 'student'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': 'Hello',
          'birthday': '951127',
          'gender': 'male',
          'job': 'word'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/3',
          'name': 'World',
          'birthday': '951127',
          'gender': 'male',
          'job': 'word'
        }]
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`));