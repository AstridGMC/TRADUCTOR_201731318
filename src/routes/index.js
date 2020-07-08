const express = require('express');
const router = express.Router();
const parser = require('../script/gramatica.js');
const xmlParser = require('xml2json');
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
  const variables = require('../script/gramatica.js').VARIABLES;
  const errores = require('../script/gramatica.js').ERRORES;
  guardarHtmlF(htmlArch, jsonHTML);
  res.send({ html: htmlArch, json: jsonHTML , varia:variables,error: errores  });
});

var doc;
var nom;
router.post('/guardar', (req, res) => {
  doc= req.body.documento;
  nom= req.body.nombre;
  guardarDoc(doc, nom)
  res.send('guardado');
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
  var json = xmlParser.toJson(html);
  jsonHTML =xmlParser.toJson(html);
  console.log('JSON output', xmlParser.toJson(html));
   console.log(json);
}

function guardarDoc(doc, nombre){
  fs.writeFile(nombre, doc, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("El archivo 1 fue creado correctamente");
  });
}
function guardarHtmlF(html, jsonA) {

  fs.writeFile("salidaHtml.html", html, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("El archivo 1 fue creado correctamente");
  });

  fs.writeFile("salidaHtmlJson.json", jsonA, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("El archivo 2 fue creado correctamente");
  });
}
module.exports = router;