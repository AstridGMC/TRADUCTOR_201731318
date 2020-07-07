function Declaracion( nombreVar){
    var asignacion = nombreVar[0];
    for (let i = 1; i < nombreVar.length; i++) {
        const element = nombreVar[i];
        asignacion = asignacion+","+element;
        
    }
    return asignacion;
}


function OperacionImprimir( cadena){
    var impr = "print( "+cadena+" );\n";
return impr;
}