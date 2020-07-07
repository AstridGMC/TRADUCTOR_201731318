class Variable{

    constructor (tipo, ID, linea){
        this.tipo = tipo;
        this.ID = ID;
        this.linea=linea;
    }
    
    set Tipo(tipo){
        this.tipo = tipo;
    }
    set linea(line){
        this._linea = line;
    }
    set ID(ID){
        this._ID = ID;
    }
    
    get linea(){
        return this.linea;
    }

    get ID(){
        return this.ID;
    }

    get Tipo(){
        return this.tipo;
    }

}

module.exports = Variable;