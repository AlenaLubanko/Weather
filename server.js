import express from 'express';
import hbs from 'hbs';
import path from 'path';


const app = express();

app.set('view engine', 'hbs');
//process.env.PWD - путь к файлу 'public'
app.use(express.static(path.join(process.env.PWD, 'public')));

// app.get('/', (req, res) => {
//     res.render('main')
// });

app.get('/', (req, res) => {
  res.render('weather')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on ' + port));