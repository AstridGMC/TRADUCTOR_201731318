%{
	const Error = require('./Error.js');
	var erroresLexicos = [];
	var variables=[];
%}
/* Definición Léxica */
%lex

%options case-insensitive

%%
//COMENTARIOS
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]					// COMENTARIOMULTILINEA
"//".*			                                  // COMENTARIOSIMPLE
//Palabras reservadas
//TIPOS DE DATOS
"int"                   {console.log('Token: INT, Lexema: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column+ 'INT'); return 'INT';}
"double"                {console.log('Token: DOUBLE, Lexema: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column+ ' DOUBLE');return 'DOUBLE';}
"char"                  {console.log('Token: CHAR, Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column+ ' CHAR');return 'CHAR';}
"bool"                  {console.log('Token: BOOL, Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column+ ' BOOL');return 'BOOL';}
"string"                {console.log('Token: STRING, Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column+"STRING");return 'STRING';}
//-DE MAS PALABRAS

"void"                  {console.log('Token: VOID, Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column+ 'VOID'); return 'VOID';}
"main"                  {console.log('Token: MAIN, Lexema: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'MAIN';}
"Console"   			{console.log('Token: CONSOLE,, Lexema: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'CONSOLE';}
"Write"  				{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'WRITE'}
"switch"                {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'SWITCH';}
"case"                  {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'CASE';}
"default"				{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'DEFAULT';}

"for"                   {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'FOR';}
"print"                 {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'PRINT';}

"while"                 {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'WHILE';}
"do"                    {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'DO';}

"return"                {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'RETURN';}
"break;"                {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'BREAK';}
"continue;"             {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'CONTINUE';}

"if"					{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'IF';}
"else"					{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'ELSE';}

//LOGICOS
"&&"                    {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'AND';}
[|][|]                  {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'OR';}
[!]                     {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'NOT';}

//ARITMETICOS
"+"                 {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'MAS';}
"-"                 {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'MENOS';}
"*"                 {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'POR';}
"/"                 {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'DIVIDIDO';}

// 

";"                 {console.log('Token: PTCOMA Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'PTCOMA';}
"("               {console.log('Token: PARABRE, Lexema: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column); return 'PARABRE';}
")"                 {console.log('Token: PARCIERRA, Lexema: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'PARCIERRA';}
"["               {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'CORIZQ';}
"]"                 {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'CORDER';}
"{"					{console.log('Token: LAVEABRE, Lexema: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'LLAVEABRE';}
"}"					{console.log('Token: LLABECIERRA, Lexema ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'LLAVECIERRA';}
":"					{console.log('Token: DOSPUNTOS, Lexema' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'DOSPUNTOS';}
[.]					{console.log('Token: PUNTO, Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'PUNTO';}
","					{console.log('Token: COMA: Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'COMA';}

">="				{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'MASIGUAL';}
"<="				{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'MENOSIGUAL';}
"=="				{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'IGUALQUE';}
"<"					{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'MENOSQUE';}
">"					{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'MASQUE';}
"="					{console.log('Token: IGUAL, Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'IGUAL';}

//booleanos
"true"				{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'TRUE';}
"false"				{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'FALSE';}
 
\'[a-zA-Z]\'\b          {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'CARACTER';}
[0-9]+("."[0-9]+)?\b    {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'DOUBLE';}
\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2);console.log('Token: CADENA, Lexema:' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column); return 'CADENA'; }
\'[^\']*\' 		{ yytext = yytext.substr(1,yyleng-2);console.log('Token: html : ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column); return 'HTMLPROD'; }
[0-9]+\b                {console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column);return 'ENTERO';}
([a-zA-Z])[a-zA-Z0-9_]*	{console.log('Token: ' + yytext + ', linea: ' + yylloc.first_line + ' columna: ' + yylloc.first_column+" ID");return 'ID';}
/* Espacios en blanco */
\s+											// se ignoran espacios en blanco            


<<EOF>>				return 'EOF';
.                       {console.log('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

%{
	var id;
	var html1='';
	var erroresSintacticos = [];
	var variables1=[];
	var VariableN= require('./Variable.js');
	const TIPOSVALORES	= require('./nombrarDato').TIPOSVALORES;
	const VALORCONDICIONAL_Y_LOGICO	= require('./nombrarDato').VALORCONDICIONAL_Y_LOGICO;
	const FORMISTR= require('./nombrarDato').formarInstrucciones;
%}
%left 'MAS'
%left  'MENOS'
%left 'POR' 'DIVIDIDO'
%left UMENOS
%start ini

%% /* Definición de la gramática */

ini
	: inicio EOF {
		module.exports.variables1;
		module.exports.HTMLARCH=html1;
		// cuado se haya reconocido la entrada completa retornamos el AST
		return $1;
	}
;

inicio
	:inicio opciones	{$1.push($2); $$ = $1; console.log('finopciones');console.log(variables1.length);}
	|opciones 			{$$=[$1];console.log('opciones'); ID='';}
	|error  { console.error('Este es un error sintáctico if: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
	 erroresSintacticos.push(new Error( this._$.first_line ,this._$.first_column, yytext));}
;	

main	
		:VOID MAIN PARABRE PARCIERRA LLAVEABRE sentencia_Listado LLAVECIERRA 
			{$$=FORMISTR.funcionMain($6);}
		|VOID MAIN PARABRE PARCIERRA LLAVEABRE  LLAVECIERRA 
			{$$=FORMISTR.funcionMainVacio();}
		
;

opciones	
	:tipoDato opciones1{$$=FORMISTR.funcionOpcionesOP1($1,$2);console.log('opciones1 ');}
	|asignacion 	{$$=FORMISTR.funcionOpcionesA($1);console.log('asig');}
	|metodo			{$$= FORMISTR.funcionOpcionesF($1);console.log('metodo');}
	|main 			{$$= FORMISTR.funcionOpcionesMain($1);console.log('main');}
;

opciones1
	:declaracion 	{$$= FORMISTR.funcionOpciones12($1);console.log('declaracion');}
	|funcion		{$$= FORMISTR.funcionOPciones11($1);console.log('funcion');}

;

asignacion
		:ID IGUAL expresion PTCOMA	{$$=FORMISTR.asignacionVariable($1, $3);}
;

variablesManejo 
		:asignacion 			{$$=FORMISTR.variableManejo($1);console.log('asig');}
		|tipoDato declaracion 	{$$=FORMISTR.variableManejo2($1 ,$2); variables1.push(new VariableN($1, ID , this._$.first_line ));}
;

declaracion	 
	: ID IGUAL expresion PTCOMA {$$=FORMISTR.funciondDeclaracion1($1,$3);console.log('declaracion1'); ID= $1;}
	| IDmas PTCOMA				{$$=FORMISTR.funciondDeclaracion2($1);console.log('declaracion2');}
; 

IDmas	
		:IDmas COMA ID	{$1.push(FORMISTR.funcionIDMAS($2)); $$ = $1;console.log('ID2');ID= ID+', '+$2;}
		|ID				{$$=FORMISTR.funcionIDMAS($1);console.log('id1'); ID= $1}
;

expresion	
		:expCadena			{$$=FORMISTR.funcionExpresion1($1);}
		|declaredFuncion	{$$=FORMISTR.funcionExpresion3($3);}
;

declaredFuncion
		:ID  PARABRE   paramDeclared		{$$=FORMISTR.functionFUncionDeclared($1,$3);console.log("declaredFuncion");}
;

paramDeclared 	
		:IDmas  PARCIERRA	{$$=FORMISTR.funcionParamDeclared($1);{console.log('ended');}}
		|PARCIERRA 		{$$=FORMISTR.funcionParamDeclared(' '); console.log('paramDeclared )');}
;

cadenaConcat
		:cadenaConcat MAS CADENA	{$1.push(FORMISTR.funcionCadenaConcat1($3));$$ =$1;}
		|cadenaConcat MAS CARACTER	{$1.push(FORMISTR.funcionCadenaConcat2($3));$$ =$1;}
		|CADENA 					{$$=FORMISTR.funcionCadenaConcat1($1);}
		|CARACTER					{$$=FORMISTR.funcionCadenaConcat2($1);}
		;

metodo	
		:VOID ID PARABRE parametros PARCIERRA LLAVEABRE sentencia_listado LLAVECIERRA {$$=FORMISTR.funcionNuevoMetodo($2,$4,$7);console.log('METODO');}
		|VOID ID PARABRE parametros PARCIERRA LLAVEABRE  LLAVECIERRA {$$=FORMISTR.funcionNuevoMetodo($2,$4,' ');console.log('METODO1');}
		|VOID ID PARABRE PARCIERRA LLAVEABRE  LLAVECIERRA {$$=FORMISTR.funcionNuevoMetodo($2,' ',' ');console.log('METODO2');}
		|VOID ID PARABRE PARCIERRA LLAVEABRE  sentencia_listado LLAVECIERRA {$$=FORMISTR.funcionNuevoMetodo($2,' ',$6);console.log('METODO3');}
;

funcion	
		: ID PARABRE funcion2	{$$=FORMISTR.funcionNuevafuncion(' ',$1,$3);}
;

funcion2
		:parametros PARCIERRA  LLAVEABRE sentencia_listado LLAVECIERRA
			{$$=FORMISTR.funcionFuncion2($1,$4);}
		|PARCIERRA  LLAVEABRE sentencia_listado LLAVECIERRA 
			{$$=FORMISTR.funcionFuncion2(undefined, $3);}
;

parametros 
		:parametros COMA tipoDato ID 	{$1.push(FORMISTR.funcionParametros1($3 , $4)); $$=$1 ; console.log('tiposDato');}
		|tipoDato ID					{$$ = [FORMISTR.funcionParametros2($1)]; console.log('tipoDatoS');}				
;

tipoMetodo		
		:tipoDato		{$$=FORMISTR.funcionTipoMetodo($1);}
;

tipoDato	
		:INT			{$$= 'int';}
		|DOUBLE			{$$= 'double';}
		|STRING			{$$= 'string';}
		|CHAR			{$$= 'char';}
		|BOOL			{$$= 'bool';}
;

sentencia				
		:while				{$$= FORMISTR.funcionSentencia1($1);}
		|do-while			{$$= FORMISTR.funcionSentencia2($1);}
		|for				{$$= FORMISTR.funcionSentencia3($1);}
		|switchCase			{$$= FORMISTR.funcionSentencia4($1);}
		|ifS				{$$= FORMISTR.funcionSentencia5($1);}
		|sentenciaIfElse	{$$= FORMISTR.funcionSentencia6($1);}
		|imprimir			{$$= FORMISTR.funcionSentencia7($1);}
		|variablesManejo	{$$= FORMISTR.funcionSentencia8($1);}
		|declaredFuncion PTCOMA {console.log('declaredFuncion');$$= FORMISTR.funcionSentencia9($1);}
;		

imprimir
		:CONSOLE PUNTO WRITE PARABRE cuerpoImprimir PARCIERRA PTCOMA 	{$$= FORMISTR.funcionImprimir($5);}]
;

cuerpoImprimir	
		: HTMLPROD	{$$= FORMISTR.funcionCuerpoImprimir($1);html1=html1+$1+'\n';}
		|expresion	{$$= FORMISTR.funcionCuerpoImprimir2($1);}
;
//--------------------------
sentenciaCiclos			
		:sentenciaCiclos sentenciaCiclos2	{$1.push(FORMISTR.fucionSentenciaCiclos($2)); $$= $1;}
		|sentenciaCiclos2					{$$ = [FORMISTR.fucionSentenciaCiclos($1)];}
;

sentenciaCiclos2 
		:sentencia	{$$=FORMISTR.fucionSentenciaCiclos2_1($1);}
		|ifbreak	{$$=FORMISTR.fucionSentenciaCiclos2_2($1);}
;

sentencia_listado		
		:sentencia_listado  sentencia { $1.push(FORMISTR.fucionSentencia_listado($2)); $$= $1 ; }
		|sentencia	{$$ = [FORMISTR.fucionSentencia_listado($1)]; console.log('sentenciaListado');}
;

sentenciaIfElse	
		:ifS ELSE LLAVEABRE sentencia_listado LLAVECIERRA	{$$=FORMISTR.fucionSentenciaIfElse2($1,$4);}
		|ifS ELSE LLAVEABRE LLAVECIERRA		  				{$$=FORMISTR.fucionSentenciaIfElse2($1,' ');}
;

ifS		
		:IF PARABRE ExpresionLogica PARCIERRA sentencia 								{$$=FORMISTR.funcionIf1($3,$5);console.log('if 1');}
		|IF PARABRE ExpresionLogica PARCIERRA LLAVEABRE sentencia_listado LLAVECIERRA	{$$=FORMISTR.funcionIf2($3,$6);console.log('if 2');}
		|IF PARABRE ExpresionLogica PARCIERRA LLAVEABRE LLAVECIERRA						{$$=FORMISTR.funcionIf2($3, ' ');console.log('if vacio');}
		;

ifBreak	
		:IF PARABRE ExpresionLogica PARCIERRA	BREAK PTCOMA								{$$=FORMISTR.funcionIfBreak1($3);console.log('if 1');}
		|IF PARABRE ExpresionLogica PARCIERRA LLAVEABRE sentencia_Listado BREAK LLAVECIERRA	{$$=FORMISTR.funcionIfBreak2($3,$6);console.log('if 2');}
;

while		
		:WHILE PARABRE ExpresionLogica PARCIERRA LLAVEABRE sentencia_listado LLAVECIERRA
		{$$=FORMISTR.funcionWhile($3,$6);}
;

do-while	
		:DO LLAVEABRE sentencia LLAVECIERRA WHILE PARABRE ExpresionLogica PARCIERRA PTCOMA 
		{$$=FORMISTR.funcionDo_While($7, $3);}
;

for		
		:FOR PARABRE variablesManejo PTCOMA ExpresionLogica PTCOMA incremento PARCIERRA LLAVEABRE sentencia_Listado LLAVECIERRA	
		{$$=FORMISTR.funcionFor($3, $5, $7, $10);}
;

ExpresionLogica	
		:condicionRelacional AND condicionRelacional	{$$=FORMISTR.funcioneExpresionLogica($1, $3, '&&');}
		|condicionRelacional OR condicionRelacional		{$$=FORMISTR.funcioneExpresionLogica($1, $3, '||');}
		|NOT condicionRelacional						{$$=FORMISTR.funcioneExpresionLogicaNot($2);}
		|condicionRelacional 							{$$=$1;}
;

incremento			
		:aumento			{$$=FORMISTR.funcionIncremento1($1);}
		|exp				{$$=FORMISTR.funcionIncremento2($1);}
;

aumento		
		:exp MAS MAS 		{$$=FORMISTR.funcionAumento($1,'MAS');}
		|exp MENOS MENOS	{$$=FORMISTR.funcionAumento($1,'MENOS');}
;



switchCase	
		:
		 SWITCH PARABRE ID PARCIERRA LLAVEABRE cuerpoCase LLAVECIERRA {$$= FORMISTR.funcionswitchCase($3, $6);}
		|SWITCH PARABRE ID PARCIERRA LLAVEABRE cuerpoCase default PTCOMA LLAVECIERRA {$$= FORMISTR.funcionswitchCaseDefault($3, $6, s7);}
;

cuerpoCase	
		:cuerpoCase case { $1.push($2); $$ = $1; }
		|case { $$ = [$1]; }
;

case	
		:CASE ID DOSPUNTOS PTCOMA 				{$$= FORMISTR.funcionCase($2);}
		|CASE ID DOSPUNTOS sentenciaBreakCase 	{$$=FORMISTR.funcionCaseBrake($2, sentenciaBreakCase);}
;	


				
default		
		:DEFAULT DOSPUNTOS sentenciaBreakCase	{$$= FORMISTR.functionDefault2($3);}
		|DEFAULT DOSPUNTOS 					 	{$$= FORMISTR.functionDefault();}

;

sentenciaBreakCase	
		:sentencia_Listado						{$$=	FORMISTR.funcionSentenciaBreakCase1($1);}
		|sentencia_Listado BREAK PTCOMA			{$$=	FORMISTR.funcionSentenciaBreakCase1($1);}
		|BREAK PTCOMA							{$$= 	FORMISTR.funcionSentenciaBreakCase3();}
;	

expCadena 
		:expCadena MAS expCadena			{$$= FORMISTR.funcionExpCadena1($1, $3);console.log('expCadena Mas');}
		|CADENA								{$$= FORMISTR.funcionExpCadena2($1);console.log('expCadena cadena');}
		|exp								{$$= FORMISTR.funcionExpCadena3($1);console.log('expCadena exp');}
;		
		
exp		
		:MENOS exp %prec UMENOS	{$$= FORMISTR.funcionEXP3($2);}
		| exp MENOS  exp		{$$= FORMISTR.funcionEXP2($1,$3, '-');}
		| exp POR exp			{$$= FORMISTR.funcionEXP2($1,$3, '*');}
		| exp DIVIDIDO  exp		{$$= FORMISTR.funcionEXP2($1,$3, '/');}
		| exp MAS exp			{$$= FORMISTR.funcionEXP2($1,$3, '+');}
		| PARABRE exp PARCIERRA	{$$= FORMISTR.funcionEXP1($1);}
		|PARABRE error PARCIERRA { console.error('Este es un error sintáctico if: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
	 		erroresSintacticos.push(new Error( this._$.first_line ,this._$.first_column, yytext));}
		|ENTERO					{$$= FORMISTR.newDato($1,"int" );}
		|DOUBLE					{$$= FORMISTR.newDato($1,"double" );}
		|CARACTER				{$$= FORMISTR.newDato($1,"char" );}
		|ID						{$$= FORMISTR.newDato($1,"string" );}
		| booleanos {$$= FORMISTR.funcionCondicionRelacional3($1);}						
;

condicionRelacional		
		: exp MENOSIGUAL exp {$$= FORMISTR.funcionCondicionRelacional2($1, $3, '<=');}
		| exp MASIGUAL 	exp {$$= FORMISTR.funcionCondicionRelacional2($1, $3,'>=');}
		| exp MASQUE 	exp {$$= FORMISTR.funcionCondicionRelacional2($1, $3, '>');console.log('condiRelacional>');}
		| exp MENOSQUE 	exp {$$= FORMISTR.funcionCondicionRelacional2($1, $3, '<');console.log('condiRelacional<');}
		| expCadena IGUALQUE expCadena{$$= FORMISTR.funcionCondicionRelacional2($1, $3, '==');console.log('condiRelacional==');}
		| expCadena NOT IGUAL expCadena {$$= FORMISTR.funcionCondicionRelacional2($1, $3, '!=');console.log('condiRelacional !=');}	
;

booleanos	
		:TRUE	{$$= FORMISTR.funcionBooleano('true');}
		|FALSE	{$$= FORMISTR.funcionBooleano('false');}
;




