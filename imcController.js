const IMC = require('../models/imcModel');

const imcData = []; // Tableau pour stocker les données IMC

exports.calculateIMC = (req, res) => {
  const { date, height, weight } = req.body;
  const imc = new IMC(date, height, weight);
  const calculatedIMC = imc.calculateIMC();
  imcData.push({ date, imc: calculatedIMC });
  res.redirect('/historique');
};

exports.getHistorique = (req, res) => {
  res.render('historique', { imcData });
};
