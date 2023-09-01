let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let imcController = require('./controllers/imcController');

app.get('/', (req, res) => {
  res.render('accueil');
});

app.post('/calculate', imcController.calculateIMC);

app.get('/historique', imcController.getHistorique);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
