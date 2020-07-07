class Error{

    constructor (linea, columna, lexema){
        this.linea = linea;
        this.columna=columna;
        this.lexema=lexema;
    }
    
    set Tipo(tipo){
        this.tipo = tipo;
    }
    set linea(line){
        this._linea = line;
    }
    set columna(columna){
        this._columna = columna;
    }
    set lexema(lexema){
        this._lexema = lexema;
    }
    get linea(){
        return this.linea;
    }

    get columna(){
        return this.columna;
    }

    get lexema(){
        return this.lexema;
    }

    get Tipo(){
        return this.tipo;
    }

}

module.exports = Error;