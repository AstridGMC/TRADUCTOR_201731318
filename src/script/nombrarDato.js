// Constantes para los tipos de 'valores' que reconoce nuestra gramática.
const TIPOSVALORES = {
    ENTERO: 'int',
    DOUBLE: 'float',
    IDENTIFICADOR: 'id',
    CADENA: 'string',
    CARACTER: 'char'
}

const OPCIONES = {
    DECLARACION: 'declaracion',
    METODO: 'metodo',
    FUNCION: 'funcion',
    MAIN: 'main'
}

const VALORCONDICIONAL_Y_LOGICO = {
    MAYORQUE: '>',
    MENORQUE: '<',
    IGUALIGUAL: '==',
    NOIGUAL: '!',
    IGUAL: '=',
    MAYORIGUAL: '>=',
    MENORIGUAL: '<=',
    AND: '&&',
    OR: '||',
    NOT: '!'
}


const BOOLEANO = {
    TRUE: 'TRUE',
    FALSE: 'FALSE'
}

const OPERACIONESMat = {
    SUMA: 'SUMA',
    RESTA: 'RESTA',
    MULTIPLICACION: 'MULTIPLICACION',
    DIVISION: 'DIVISION',
    NUMNEGATIVO: 'NUM_NEGATIVO'
}


const INSTRUCCIONES = {
    WHILE: 'while',
    FOR: 'for',
    IMPRIMIR: 'imprimir',
    DO_WHILE: 'do-while',
    SWITCH: 'switch',
    IF: 'if',
    IFELSE: 'ifElse',
    IMPRIMIR: 'imprimir',
    DECLARACION: 'declarar',
}
/*
const SIGNOSPUNTUACION ={
    PTCOMA:     'PUNTOYCOMA',
    PARABRE:    '(',
    PARCIERRA:  ')',
    LLAVEABRE:  '{',
    LLAVECIERRA:'}',
    DOSPUNTOS:  'DOS_PUNTOS',
    PUNTO:      'PUNTO',
    COMA:       'COMA'	
}
const RESERVADAS={
    INT:        'INT',
    DOUBLE:     'DOUBLE',
    CHAR:       'CHAR',
    BOOL:       'BOOL',
    STRING:     'STRING',
    VOID:       'VOID',
    MAIN:       'MAIN',
    CONSOLE:    'CONSOLE',
    WRITE:      'WRITE',
    SWITCH:     'SWITCH',
    CASE:       'CASE',
    DEFAULT:    'DEFAULT',
    FOR:        'FOR',
    PRINT:      'PRINT',
    WHILE:      'WHILE',
    DO:         'DO',
    RETURN:     'RETURN',
    BREAK:       'BREAK',
    CONTINUE:   'CONTINUE',
    IF:         'IF',
    ELSE:       'ELSE'
}*/

/**
 * @param {*} operando1
 * @param {*} operando2 
 * @param {*} tipo 
 */
function nuevaOperacion(operando1, operando2, tipo) {
    return {
        operando1: operando1,
        operando1: operando1,
        tipo: tipo
    }
}




const formarInstrucciones = {

    nuevaClase: function (inicio) {
        return {
            inicio: inicio
        }
    },

    funcionInicio: function (opcion) {
        return {
            opcion: opcion
        }

    },

    funciondDeclaracion1: function (ID, expresion) {
        return {
            ID: ID,
            IGUAL: '=',
            expresion: expresion,
            PTCOMA: ';'
        }
    }, funciondDeclaracion2: function (tipoDato, ID, expresion) {
        return {
            id: ID,
            PTCOMA: ';'
        }
    },
    funcionOPciones11: function ( sentencias) {
            return {
                funcion: sentencias
            }
      
    },funcionOpciones12: function(sentencias){
        return {
            Cuerpodeclaracion: sentencias
        }
    },
    funcionOpcionesOP1: function (tipo, sentencia) {
        return {
            tipo: tipo,
            opciones1: sentencia
        }
    },
    funcionOpcionesD: function (sentencias) {//=--------

        return {
            declaracion: sentencias
        }

    },
    funcionOpcionesA: function (sentencias) {//=--------

        return {
            asignacion: sentencias
        }
    }, funcionOpcionesF: function (sentencias) {//=--------
        return{
            funcion: sentencias
        }
    }, funcionOpcionesMain: function (sentencias) {//=--------

        return {
            main: sentencias
        }
    },
    funcionOpcionesSentencia: function (sentencias) {//=--------

        return {
            sentencia: sentencias
        }
    },
    funciondDeclaracion2: function (tipoDato, ID) {//''''''''''
        return {
            tipoDato: tipoDato,
            IDmas: ID,
            PTCOMA: ';'
        }
    },
    funcionInicio: function (opciones) {//-----------
        return {
            opciones: opciones
        }
    },
    funcionOPciones: function (tipo, opcion) {//---------
        return {
            tipo: opcion
        }
    },
    funcionExpresion1: function (expresion) {
        return {
            expCadena: expresion
        }
    },
    funcionExpresion2: function (expresion) {
        return {
            exp: expresion
        }
    },
    funcionExpresion3: function (expresion) {
        return {
            declaracionFuncion: expresion
        }
    },
    funcionNuevoMetodo: function (nombre, paramentros, sentencia_Listado) {
        return {
            VOID: 'void',
            ID: nombre,
            PARABRE: '(',
            parametros: paramentros,
            PARCIERRA: ')',
            LLAVEABRE: '{',
            sentencia_listado: sentencia_Listado,
            LLAVECIERRA: '}'
        }
    },

    funcionNuevafuncion: function (tipo, nombre, funcion2) {
        return {
            tipoMetodo: tipo,
            ID: nombre,
            PARABRE: '(',
            funcion2: funcion2

        }
    },

    funcionFuncion2: function (paramentros, sentencia_Listado) {
        if (paramentros = undefined) {
            return {
                PARCIERRA: ')',
                LLAVEABRE: '{',
                sentencia_listado: sentencia_Listado,
                LLAVECIERRA: '}'
            }
        } else {
            return {
                parametros: paramentros,
                PARCIERRA: ')',
                LLAVEABRE: '{',
                sentencia_listado: sentencia_Listado,
                LLAVECIERRA: '}'
            }
        }
    },
    functionFUncionDeclared: function (ID, paramDeclared) {/* -----------*/
        return {
            ID: ID,
            PARIZQ: '(',
            paramDeclared: paramDeclared
        }
    },
    funcionParamDeclared: function (param) {//''''''''''''''
        if (param != undefined) {
            return {
                IDmas: param,
                PARDER: ')'
            }
        } else {
            return {
                PARDER: ')'
            }
        }

    },
    funcionParametros1: function (tipoDato, ID) {/* -----------*/
        return {
            COMA: ',',
            tipoDato: tipoDato,
            ID: ID
        }
    },
    funcionParametros2: function (tipoDato, ID) {/* -----------*/
        return {
            tipoDato: tipoDato,
            ID: ID

        }
    },
    funcionMain: function (sentencia_Listado) {
        return {
            VOID: 'void',
            MAIN: 'main',
            PARABRE: '(',
            PARCIERRA: ')',
            LLAVEABRE: '{',
            sentencia_Listado: sentencia_Listado,
            LLAVECIERRA: '}'
        }
    },
    funcionMainVacio: function () {
        return {
            VOID: 'void',
            MAIN: 'main',
            PARABRE: '(',
            PARCIERRA: ')',
            LLAVEABRE: '{',
            LLAVECIERRA: '}'
        }
    },

    funcionTipoMetodo: function (tipoMetodo) {
        return tipoMetodo;
    },

	/**
	 * @param {*} operando1
	 * @param {*} operando2 
	 * @param {*} tipo 
	 */
    nuevaOperacionBinaria: function (operando1, operando2, tipo) {
        return nuevaOperacion(operando1, operando2, tipo);
    },
    /**
	 * @param {*} operando2
	 * @param {*} tipo 
	 */
    nuevaOperacionUnitaria: function (operando2, tipo) {
        return nuevaOperacion(operando2, undefined, tipo);
    },
    /**
	 * @param {*} valorDato
	 * @param {*} tipo 
	 */
    newDato: function (valorDato, tipo) {/* -----------*/
        return {
            tipo: tipo,
            valor: valorDato
        }
    },

    variableManejo: function (tipo) {//''''''''''''
        return {
            asignacion: tipo
        }
    },
    variableManejo2: function (tipo, declaracion) {//'''''''''''
        return {
            tipoDato: tipo,
            declaracionVar: declaracion
        }
    },

    declararVariable1: function (tipo, idVar) {
        return {
            tipoDato: tipo,
            ID: idVar,
            PTCOMA: ';'
        }
    },
    declararYAsignar: function (tipo, idVar, asignacion) {
        return {
            tipo: tipo,
            declararVariable: idVar,
            IGUAL: '=',
            expresion: asignacion,
            PTCOMA: ';'
        }
    },
    asignacionVariable: function (idVar, asignacion) {//------
        return {
            ID: idVar,
            IGUAL: '=',
            expresion: asignacion,
            PTCOMA: ';'
        }
    },
    funcionIDMAS: function (params) {//--------
        return {
            idMas: params
        }

    },
    funcionCadenaConcat1: function (dato) {//--------
        return {
            CADENA: dato
        }
    },
    funcionCadenaConcat2: function (dato) {//-------
        return {
            caracter: dato
        }
    },
    funcionTipoMetodo: function (tipo) {/* -----------*/
        if (tipo != 'void') {
            return {
                tipoDato: tipo
            }
        } else {
            return {
                void: tipo
            }
        }
    },
    funcionSentencia1: function (CUERPO) {/* -----------*/
        return {
            while: CUERPO
        }
    },
    funcionSentencia2: function (CUERPO) {/* -----------*/
        return {
            do_while: CUERPO
        }
    },
    funcionSentencia3: function (CUERPO) {/* -----------*/
        return {
            for: CUERPO
        }
    },
    funcionSentencia4: function (CUERPO) {/* -----------*/
        return {
            switchCase: CUERPO
        }
    },
    funcionSentencia5: function (CUERPO) {/* -----------*/
        return {
            if: CUERPO
        }
    },
    funcionSentencia6: function (CUERPO) {/* -----------*/
        return {
            sentenciaIfElse: CUERPO
        }
    },
    funcionSentencia7: function (CUERPO) {/* -----------*/
        return {
            imprimir: CUERPO
        }
    },
    funcionSentencia8: function (CUERPO) {/* -----------*/
        return {
            variablesManejo: CUERPO
        }
    },funcionSentencia10: function (RET, CUERPO) {/* -----------*/
        return {
            RETURN: RET,
            expresion: CUERPO
        }
    },funcionSentencia11: function (CUERPO) {/* -----------*/
        return {
            RETURN: CUERPO
        }
    },
    funcionSentencia9: function (CUERPO) {/* -----------*/
        return {
            declaredFuncion: CUERPO,
            PTCOMA: ';'
        }
    },
    /**
	 * @param {*} cadenaImprimir
	 */
    funcionImprimir: function (cadenaImprimir) {/* -----------*/
        return {
            IMPRIMIR: 'IMPRIMIR',
            parAb: '(',
            cuerpoImprimir: cadenaImprimir,
            parCierra: ')',
            pntComa: ';'
        }
    },
    funcionCuerpoImprimir: function (HTMLPROD) {/* -----------*/
        return {
            HTMLPROD: HTMLPROD
        }
    },
    funcionCuerpoImprimir2: function (expresion) {/* -----------*/
        return {
            expresion: expresion
        }
    },
    fucionSentenciaCiclos: function (sentencia) {/* -----------*/
        return {
            sentenciaCiclos2: sentencia
        }
    },
    fucionSentenciaCiclos2_1: function (sentencia) {/* -----------*/
        return {
            sentencia: sentencia
        }
    },
    fucionSentenciaCiclos2_2: function (sentencia) {/* -----------*/
        return {
            ifbreak: sentencia
        }
    },fucionSentenciaCiclos2_3: function (sentencia) {/* -----------*/
        return {
            break: sentencia
        }
    },fucionSentenciaCiclos2_4: function (sentencia) {/* -----------*/
        return {
            continue: sentencia
        }
    },
    fucionSentencia_listado: function (sentencia) {/* -----------*/
        return {
            sentencia: sentencia
        }
    },
    fucionSentenciaIfElse1: function (ifS, sentencia) {/* -----------*/
        return {
            ifS: ifS,
            ELSE: 'else',
            sentencia: sentencia
        }

    },
    fucionSentenciaIfElse2: function (ifS, sentencia_Listado) {/* -----------*/
        return {
            ifS: ifS,
            ELSE: 'else',
            LLAVEABRE: '{',
            sentencia_listado: sentencia_Listado,
            LLAVECIERRA: '}'
        }

    },
    fucionSentenciaIfElse3: function (ifS, sentencia_IfElse) {/* -----------*/
        return {
            ifS: ifS,
            ELSE: 'else',
            ifS:sentencia_IfElse
        }

    },
    fucionSentenciaIfElse4: function (ifS) {/* -----------*/
        return {
            ifS: ifS
        }
    },
    funcionIf1: function (ExpresionLogica, sentencia) {/* -----------*/
        return {
            IF: 'if',
            PARABRE: '(',
            ExpresionLogica: ExpresionLogica,
            PARCIERRA: '(',
            sentencia: sentencia
        }
    },
    funcionIf2: function (ExpresionLogica, sentencia_Listado) {/* -----------*/

        if (sentencia_Listado != ' ') {
            return {
                IF: 'if',
                PARABRE: '(',
                ExpresionLogica: ExpresionLogica,
                PARCIERRA: ')',
                LLAVEABRE: '{',
                sentenciaListado: sentencia_Listado,
                LLAVECIERRA: '}'
            }
        } else {
            return {
                IF: 'if',
                PARABRE: '(',
                ExpresionLogica: ExpresionLogica,
                PARCIERRA: '(',
                LLAVEABRE: '{',
                LLAVECIERRA: '}'
            }
        }

    },
    funcionIfBreak1: function (ExpresionLogica) {/* -----------*/
        return {
            IF: 'if',
            PARABRE: '(',
            ExpresionLogica: ExpresionLogica,
            PARCIERRA: ')',
            BREAK: 'break',
            PTCOMA: ';'
        }
    },
    funcionIfBreak2: function (expresionLogica, sentencia_Listado) {/* -----------*/
        return {
            IF: 'if',
            PARABRE: '(',
            ExpresionLogica: expresionLogica,
            PARCIERRA: ')',
            LLAVEABRE: '{',
            sentencia_listado: sentencia_Listado,
            BREAK: 'break',
            LLAVECIERRA: '}'
        }
    },
    /**
    * @param {*} condicion
    * @param {*} instrucciones1
    */
    funcionWhile: function (condicion, instrucciones1) {/* -----------*/
        return {
            WHILE: INSTRUCCIONES.WHILE,
            PARABRE: '(',
            condicionLogica: condicion,
            PARCIERRA: ')',
            LLAVEABRE: '{',
            sentencia_Listado: instrucciones1,
            LLAVECIERRA: '}'
        }
    },
    /**
	 * @param {*} condicion
     * @param {*} instrucciones1
	 */
    funcionDo_While: function (condicion, instrucciones1) {/* -----------*/
        return {
            DO: 'DO',
            LLAVEABRE: '{',
            instrucciones: instrucciones1,
            LLAVECIERRA: '}',
            WHILE: 'WHILE',
            PARABRE: '(',
            condicion: condicion,
            PARCIERRA: ')',
            PNTCOMA: ';'
        }
    },
    /**
	 * @param {*} condicion
     * @param {*} instrucciones1
	 */
    funcionFor: function (declaracion, expresionLogica, aumento, instrucciones1) {/* -----------*/
        return {
            FOR: 'for',
            ABREPAR: '(',
            variablesManejo: declaracion,
            PNTCOMA: ';',
            expresionLogica: expresionLogica,
            PNTCOMA: ';',
            aumento: aumento,
            PARCIERRA: ')',
            LLAVEABRE: '{',
            instrucciones: instrucciones1,
            LLAVECIERRA: '}'
        }
    },
    /**
     * @param {*} ID
     * @param {*} cuerpoCase
	 */
    funcionswitchCase: function (ID, cuerpoCase) {/* -----------*/
        return {
            SWITCHINST: INSTRUCCIONES,
            PARABRE: '(',
            ID: ID,
            PARCIERRA: ')',
            LLAVEABRE: '{',
            cuerpoCase: cuerpoCase,
            LLAVECIERRA: '}'
        }
    },
    /**
     * @param {*} ID
     * @param {*} cuerpoCase
     * @param {*} defaultid
	 */
    funcionswitchCaseDefault: function (ID, cuerpoCase, defaultid) {/* -----------*/
        return {
            SWITCHINST: INSTRUCCIONES,
            PARABRE: '(',
            ID: ID,
            PARCIERRA: ')',
            LLAVEABRE: '{',
            cuerpoCase: cuerpoCase,
            default: defaultid,
            LLAVECIERRA: '}'
        }
    },
    /**
     * @param {*} ID
	 */
    funcionCase: function (ID) {/* -----------*/
        return {
            CASE: 'case',
            ID: ID,
            DOSPUNTOS: ':',
            PTCOMA: ';'
        }
    },
    /**
     * @param {*} ID
     * @param {*} cuerposentenciaBreakCaseCase
	 */
    funcionCaseBrake: function (ID) {/* -----------*/
        return {
            CASE: 'CASE',
            ID: ID,
            DOSPUNTOS: ':',
            PTCOMA: ';'
        }
    },
    /**
     * @param {*} ID
     * @param {*} cuerposentenciaBreakCaseCase
	 */
    funcionCaseBrake2: function (ID, sentenciaBreakCase) {/* -----------*/
        return {
            CASE: 'CASE',
            ID: ID,
            DOSPUNTOS: ':',
            sentenciaBreakCase: sentenciaBreakCase,
            PTCOMA: ';'
        }
    },
    /**
   * @param {*} sentenciaListado
   */
    funcionSentenciaBreakCase1: function (sentenciaListado) {/* -----------*/
        return { sentencia_Listado: sentenciaListado }
    },
    /**
   * @param {*} senteinstruccionesnciaListado
   */
    funcionSentenciaBreakCase2: function (sentenciaListado) {/* -----------*/
        return {
            sentencia_Listado: sentenciaListado,
            BREAK: 'break',
            PTCOMA: ';'
        }
    },
    funcionSentenciaBreakCase3: function () {/* -----------*/
        return {
            BREAK: 'break',
            PTCOMA: ';'
        }
    },
    functionDefault: function () {/* -----------*/
        return {
            DEFAULT: 'default',
            DOSPUNTOS: ':',
            PTCOMA: ';'
        }
    },
    functionDefault2: function (sentenciaBreakCase) {/* -----------*/
        return {
            DEFAULT: 'default',
            DOSPUNTOS: ':',
            sentenciaBreakCase: sentenciaBreakCase
        }
    },
    /**
 * @param {*} operando1
 * @param {*} operando2 
 * @param {*} relacional 
 */
    funcionCondicionRelacional: function nuevaOperacion(operando1, operando2, relacional) {
        return {
            exp: operando1,
            relacional: relacional,
            exp: operando2

        }
    },
    /**
 * @param {*} operando1
 * @param {*} operando2 
 * @param {*} relacional 
 */
    funcionCondicionRelacional2: function nuevaOperacion(operando1, operando2, relacional) {
        return {
            expCadena: operando1,
            relacional: relacional,
            expCadena: operando2

        }
    },
    funcionCondicionRelacional3: function nuevaOperacion(operando1) {
        return {
            booleano: operando1
        }
    },
    funcionBooleano: function Fboolean(tipo) {
        return {
            BOOLEANO: tipo
        }
    },
    funcioneExpresionLogica: function (datoIzq, datoDer, expresion) {
        return {
            condicionRelacional: datoIzq,
            operador: expresion,
            condocionRelacional: datoDer
        }
    },
    funcioneExpresionLogicaNot: function (dato) {
        return {
            NOT: '!',
            condicionRelacional: dato
        }
    },
    funcionIncremento1: function (incremento) {/* -----------*/
        return {
            aumento: incremento
        }
    },
    funcionIncremento2: function (exp) {/* -----------*/
        return {
            exp: exp
        }
    },
    funcionAumento: function (exp, signo) {/* -----------*/
        if (signo == 'MAS') {
            return {
                exp: exp,
                MAS: '+'
            }
        } else {
            return {
                exp: exp,
                MENOS: '-'
            }
        }
    },
    //........................................
    funcionExpCadena1: function (expCadena1, expCadena2) {/* -----------*/
        return {
            expCadena: expCadena1,
            MAS: '+',
            expCadena: expCadena2

        }
    },
    funcionExpCadena2: function (cadena) {/* -----------*/
        return {
            CADENA: cadena
        }
    },
    funcionExpCadena3: function (expresiones) {/* -----------*/
        return {
            exp: expresiones
        }
    },
    /**
   * @param {*} expresion 
   */
    funcionEXP1: function (expresion) {/* -----------*/
        return {
            PARABRE: '(',
            exp: expresion,
            PARCIERRA: ')'
        }
    },
    /**
    * @param {*} operando1
    * @param {*} operando2 
    * @param {*} relacional 
    */
    funcionEXP2: function (operando1, operando2, signo) {/* -----------*/
        return {
            exp: operando1,
            relacional: signo,
            exp: operando2
        }
    },
    funcionEXP3: function exp1(operando2) {/* -----------*/
        return {
            MENOS: '-',
            exp: operando2
        }
    }
}
module.exports.OPCIONES = OPCIONES;
module.exports.formarInstrucciones = formarInstrucciones;
module.exports.TIPOSVALORES = TIPOSVALORES;
module.exports.VALOR_CONDI_Y_LOGICO = VALORCONDICIONAL_Y_LOGICO;
module.exports.SIMBOLO_OPERACIONES = OPERACIONESMat
module.exports.BOOLEANO = BOOLEANO;
module.exports.INSTRUCCIONES = INSTRUCCIONES;
module.exports.formarInstrucciones = formarInstrucciones;