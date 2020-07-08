class Variable{

    constructor (tipo, ID, linea){
        this.tipo = tipo;
        this.ID = ID;
        this.linea=linea;
    }
    
    set Tipo(tipo){
        this.tipo = tipo;
    }
    set Linea(linea){
        this.linea = linea;
    }
    set Id(ID){
        this.ID = ID;
    }
    
    get Linea(){
        return this.linea;
    }

    get Id(){
        return this.ID;
    }

    get Tipo(){
        return this.tipo;
    }

}

module.exports = Variable;