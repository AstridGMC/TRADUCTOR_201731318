class Error{

    constructor (linea, columna, lexema, tipo){
        this.linea = linea;
        this.columna=columna;
        this.lexema=lexema;
        this.tipo=tipo;
    }
    
    set Tipo(tipo){
        this.tipo = tipo;
    }
    set Linea(line){
        this._linea = line;
    }
    set Columna(columna){
        this._columna = columna;
    }
    set Lexema(lexema){
        this._lexema = lexema;
    }
    get Linea(){
        return this.linea;
    }

    get Columna(){
        return this.columna;
    }

    get Lexema(){
        return this.lexema;
    }

    get Tipo(){
        return this.tipo;
    }

}

module.exports = Error;