var contenido = '';
var nombreArchivo = '';
function openCity(evt, nombre) {
  console.log('esta fiucionando');
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(nombre).style.display = "block";
  contenido = document.getElementById(nombre).firstChild.value;

  nombreArchivo = nombre;
  console.log(contenido + ' ' + nombreArchivo);
  evt.currentTarget.className += "active";
}
var o = 1;
const crearBotonPest = item => {
  divDePest = document.getElementById("pestP");
  const botonN = document.createElement('button')
  botonN.className = "tablinks";
  botonN.id = item + o;
  o++;
  botonN.innerHTML = item + "<span style=\"color:crimson ;\" onclick=\"this.parentElement.style.display='none'\; document.getElementById('uno');\">x</span>";
  console.log('si');
  divDePest.appendChild(botonN);
  document.getElementById(botonN.id).setAttribute("onclick", 'openCity(event, \'' + item + '\')');

}

function ingresarTexto(item) {
  contenido = document.getElementById(item).firstChild.value;
  //console.log(contenido + '88')
}

function crearDivCuerpo(item, cuerpo) {
  divPest = document.getElementById('txtContent');
  const div = document.createElement('div');
  div.id = item;
  div.className = "tabcontent1";
  parrafo = document.createElement("textarea");
  parrafo.className = 'textoArea';
  parrafo.innerHTML = cuerpo;
  parrafo.setAttribute('onkeyup', 'ingresarTexto(\'' + item + '\');');
  div.appendChild(parrafo);
  divPest.appendChild(div);
  contenido = cuerpo + 'ooooo';
}

function nuevaTab1(nombeTab, contenido) {
  crearDivCuerpo(nombeTab, contenido);
  crearBotonPest(nombeTab);

}

function nuevaTab(nombeTab, contenido) {
  var actual = 'uno';
  pest = document.getElementById(actual + 'A');
  cuerpo = document.getElementById(actual);
  pest.innerHTML = nombeTab + "<span style=\"color:crimson ;\" onclick=\"this.parentElement.style.display='none';\" >x</span>";
  parrafo = document.createElement("textarea");
  parrafo.className = 'areaEscritura'
  parrafo.innerHTML = contenido;
  cuerpo.appendChild(parrafo);
  pest.display = 'block';
  cuerpo.display = 'block';
}
var p = 1;
function archivoNuevo() {
  var nombre = 'NUEVO' + p+'.cs';
  crearDivCuerpo(nombre, '');
  crearBotonPest(nombre);
  nombreArchivo = nombre;
  p++;
}
//====================================================================================


var tam = 30;
function leerArchivo(e) {
  var archivo = e.target.files[0];
  var nombre = document.getElementById('abrir').files[0].name;
  nombreArchivo = nombre;
  if (!archivo) {
    return;
  }
  var i = 0
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    //console.log(contenido);
    // mostrarContenido(contenido);
    nuevaTab1(nombre, contenido);
  };
  lector.readAsText(archivo);

};

var errores;

document.getElementById('abrir')
  .addEventListener('change', leerArchivo, false);
var variables = [];
function enviar() {
  console.log('funciona');
  axios.post('http://localhost:3000/code', {
    nombre: nombreArchivo,
    content: contenido
  }).then(response => {
    htmlAr = response.data.html;
    jsonHtml = response.data.json;
    variables = response.data.varia;
    errores = response.data.error;
    console.log(response);
  }).catch(error => {
    console.log(error);
  })

}
var htmlAr;
var jsonHtml;
function guardarDoc() {
  console.log('funciona');
  axios.post('http://localhost:3000/guardar', {
    documento: contenido,
    nombre: nombreArchivo
  }).then(response => {
    ;
    console.log('guardado');
  }).catch(error => {
    console.log(error);
  })
}


document.addEventListener("DOMContentLoaded", function (event) {
  var enviandoBtn = document.querySelector('#enviar');
  enviandoBtn.onclick = function () {
    enviar();
  };
});

var docHTML;
var htmlJason;


function llenarTablaHtmlJson() {
  console.log('.........camboiandiiii');
  var htmlTEXT = document.getElementById('textoHtml');
  var jsonTEXT = document.getElementById('textoJson');

  var textNode = document.createTextNode(htmlAr);
  htmlTEXT.appendChild(textNode);
  var textNode2 = document.createTextNode(jsonHtml);
  jsonTEXT.appendChild(textNode2);

};

function llenarTablaVariables() {
  console.log('llenando Variables');
  if (variables != undefined) {
    var cuerpo = '';
    var encabezado = ' <table class=table table-bordered> ' +
      '<thead class=thead-dark>' +
      ' <tr><th scope = col >TIPO</th>' +
      '<th scope = col > NOMBRE </ th >' +
      '<th scope = col> LINEA </ th > ' +
      '</tr > </thead > <tbody>';
    cuerpo = encabezado;
    for (var i = 0; i < variables.length; i++) {
      cuerpo = cuerpo +
        '<tr> ' +
        '<td> ' + variables[i].tipo + '</td > \n' +
        '<td > ' + variables[i].ID + ' </td >\n' +
        '<td > ' + variables[i].linea + ' </td >\n' +
        '</ tr > ';
    }
    cuerpo = cuerpo + '</tbody>\n</table>\n ';
    var divTabla = document.getElementById('divTabla');
    divTabla.innerHTML = cuerpo;
  }
}

function llenarTablaErrores() {
  console.log('llenando Errores');
  if (errores != undefined) {
    var cuerpo = '';
    var encabezado = ' <table class=table table-bordered> ' +
      '<thead class=thead-dark>' +
      ' <tr><th scope = col >TIPO</th>' +
      '<th scope = col > LEXEMA </ th >' +
      '<th scope = col> LINEA </ th > ' +
      '<th scope = col> COLUMNA </ th > ' +
      '</tr > </thead > <tbody>';
    cuerpo = encabezado;
    for (var i = 0; i < errores.length; i++) {
      cuerpo = cuerpo +
        '<tr> ' +
        '<td> ' + errores[i].tipo + '</td > \n' +
        '<td > ' + errores[i].lexema + ' </td >\n' +
        '<td > ' + errores[i].linea + ' </td >\n' +
        '<td > ' + errores[i].columna + ' </td >\n' +
        '</ tr > ';
    }
    cuerpo = cuerpo + '</tbody>\n</table>\n ';
    var divTabla1 = document.getElementById('divTablaErrores');
    divTabla1.innerHTML = cuerpo;
  }
}


