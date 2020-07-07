const express = require('express');
const router = express.Router();
const parser = require('../script/gramatica.js');
var htmlToJson = require('html-to-json');
const fs = require('fs');
var himalaya = require('himalaya');

var jsonHTML;
var htmlArch;
//const automata = require('../script/AnalizadorLexico')

var contAnalizar;
var nombreArch;

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.use(express.json());


router.post('/code', (req, res) => {
  contAnalizar = req.body.content;
  nombreArch = req.body.nombre;
  analizar(contAnalizar);
  res.send({ html: htmlArch, json: jsonHTML });
});

router.post('/guardarHTML', (req, res) => {
  htmlAr = req.body.html;
  jsonAr = req.body.json;
  guardarHtmlF(htmlAr, jsonAr);
  res.send('funciona htmlG');
});

router.get('/recibirDatos', (req, res) => {
  res.json({
    docHTML: htmlArch,
    htmlJason: jsonHTML
  });
});

router.get('/favicon.ico', (req, res) => {
  res.send('funciono');
});

var ast;
function analizar(entrada) {
  try {
    ast = parser.parse(entrada);
    fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 2));
    const html = require('../script/gramatica.js').HTMLARCH;
    htmlArch = html;
    combertirHtml(html);
    //console.log("leyendo gramatica" + JSON.stringify(jsonHTML));
  } catch (e) {
    console.error(e);
    return;
  }
}

function combertirHtml(html) {
  console.log('combirtienddoooooo');
  var json = himalaya.parse(html);
  jsonHTML= JSON.stringify(json);
  
 // console.dir(json, {colors: true, depth: null});
}


function guardarHtmlF(html, jsonA) {

  fs.writeFile("salidaHtml.html", html, function (err) {
    if (err) {
      return console.log(err);
    }

    //console.log("El archivo fue creado correctamente");
  });

  fs.writeFile("salidaHtmlJson.json", jsonA, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("El archivo fue creado correctamente");
  });
}


module.exports = router;