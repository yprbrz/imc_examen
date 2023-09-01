let express = require('express');
let router = express.Router();

// Importez le contrôleur IMC
let imcController = require('./controllers/imcController');

// Définissez les routes
router.get('/', (req, res) => {
  res.render('accueil');
});

router.post('/calculate', imcController.calculateIMC);

router.get('/historique', imcController.getHistorique);

module.exports = router;
