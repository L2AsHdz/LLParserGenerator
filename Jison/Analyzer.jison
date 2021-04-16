
%lex

%%
\s+                     //Ignorar espacios en blanco

//Palabras reservadas
"Wison"                 {return 'Wison';}
"Lex"                   {return 'Lex';}
"Terminal"              {return 'Terminal';}
"Syntax"                {return 'Syntax';}
"No_Terminal"           {return 'No_Terminal';}
"Initial_Sim"           {return 'Initial_Sim';}
"lambda"           {return 'lambda';}

//Signos
"¿"                     {return 'question_apertura';}
"{"                     {return 'llave_izq';}
":"                     {return 'dos_puntos';}
"<-"                    {return 'simple_arrow';}
";"                     {return 'punto_coma';}
"}"                     {return 'llave_der';}
"<="                    {return 'doble_arrow';}
"?"                     {return 'question_cierre';}
"*"                     {return 'klenee';}
"+"                     {return 'mas';}
"("                     {return 'paren_apertura';}
")"                     {return 'paren_cierre';}
"|"                     {return "pipe";}

//regexs
"#".*                       //Comentario de una lineal
[/][*][*][^EOF]*[*][/]      //Comentario en bloque
[$]_([a-zA-Z]|[0-9]|_)+     return 'nameTerminal';
[%]_([a-zA-Z]|[0-9]|_)+     return 'nameNonTerminal';
\'([a-zA-Z]|[0-9])\'        return 'caracter_alphanum';
\'[^[a-zA-Z]]\'             return 'caracter_especial';
"[aA-zZ]"                   return 'letras';
"[0-9]"                     return 'digitos';
\'[^\'\n]+\'                return 'keyword';

<<EOF>>             return 'EOF';
.                   {console.log('Error lexico', yytext);}

/lex

%{
    const { InformacionAnalisis } = require('../models/analisis/InformacionAnalisis');
    const { Produccion } = require('../models/analisis/Produccion');
    const { Termino } = require('../models/analisis/Termino');

    let info;

    let terminalClausula = "";
    let terminalCombinado = new Array;

    let terminalesDeclarados = new Array;
    let terminalesUsados = new Array;
    let nonTerminalsDeclarados = new Array;
    let nonTerminalsUsados = new Array;
    let producciones = new Array;
    let terminos = new Array;

    let noProduccion = 1;
    let isTerminal = true;

    function addToArray(array , element) {
        if (array.find(e => e == element) == undefined) {
            array.push(element);
        }
    }

    function nuevasInstancias() {
        terminalClausula = "";
        terminalCombinado = new Array;

        terminalesDeclarados = new Array;
        terminalesUsados = new Array;
        nonTerminalsDeclarados = new Array;
        nonTerminalsUsados = new Array;
        producciones = new Array;
        terminos = new Array;

        noProduccion = 1;
        isTerminal = true;
    }

    function addProduccion(leftSide, rightSide) {
        for (i in rightSide) {
            let termsAux = new Array;
            let noP;
            if (i == 0) {
                noP = rightSide[i].noProduccion;
            } else {
                if (rightSide[i].noProduccion == rightSide[i-1].noProduccion) {
                    continue;
                } else {
                    noP = rightSide[i].noProduccion;
                }
            }
            for (j in rightSide) {
                if (rightSide[j].noProduccion == noP) {
                    termsAux.push(rightSide[j]);
                }
            }
            if (termsAux.length > 0) {
                producciones.push(new Produccion(leftSide, termsAux));
            }
        }
    }
%}

%start INICIO
%%


INICIO
    : WISON_STRUCTURE EOF {
        console.log('\n***************Analisis finalizado***************\n');
        return info;
    }
;

WISON_STRUCTURE
    : Wison question_apertura ANALIZADORES question_cierre Wison
;

ANALIZADORES
    : LEXICO SINTACTICO
;

LEXICO
    : Lex llave_izq dos_puntos TERMINALES dos_puntos llave_der
;

TERMINALES
    : TERMINAL punto_coma TERMINALES
    | TERMINAL punto_coma
;

TERMINAL
    : Terminal nameTerminal simple_arrow LEXIC_RULE { terminalesDeclarados.push($2); }
;

LEXIC_RULE
    : caracter_alphanum { $$ = $1; }
    | keyword { $$ = $1; }
    | caracter_especial { $$ = $1; }
    | LEXIC_RULE2 { $$ = $1; }
    | COMBINED_TERMINALS { $$ = $1; terminalCombinado = new Array; }
;

LEXIC_RULE2
    : GRUPO CLAUSULA {
        terminalClausula += $1 + $2;
        $$ = terminalClausula;
        terminalClausula = "";
    }

    | GRUPO { $$ = $1 }
;

GRUPO
    : letras { $$ = $1; }
    | digitos { $$ = $1; }
;

CLAUSULA
    : klenee { $$ = $1; }
    | mas { $$ = $1; }
    | question_cierre { $$ = $1; }
;

COMBINED_TERMINALS
    : COMBINED_TERMINAL paren_cierre COMBINED_TERMINALS {
        terminalCombinado.unshift($1 + $2);
        $$ = terminalCombinado.join("");
    }

    | COMBINED_TERMINAL paren_cierre {
        terminalCombinado.unshift($1 + $2);
        $$ = terminalCombinado.join("");
    }
;

COMBINED_TERMINAL
    : paren_apertura LEXIC_RULE3 { $$ = $1 + $2; }
;

LEXIC_RULE3
    : LEXIC_RULE2 { $$ = $1; }
    | nameTerminal {
        $$ = $1;
        addToArray(terminalesUsados, $1);
    }
;

SINTACTICO
    : Syntax llave_izq llave_izq dos_puntos DEFINICION_GRAMATICA dos_puntos llave_der llave_der
;

DEFINICION_GRAMATICA
    : NO_TERMINALES SIMBOLO_INICIAL PRODUCCIONES {
        info = new InformacionAnalisis(terminalesDeclarados, terminalesUsados,
        nonTerminalsDeclarados, nonTerminalsUsados, producciones);
        nuevasInstancias();
    }
;

NO_TERMINALES
    : NO_TERMINAL punto_coma NO_TERMINALES {
        nonTerminalsDeclarados.unshift($1);
    }
    | NO_TERMINAL punto_coma {
        nonTerminalsDeclarados.unshift($1);
    }
;

NO_TERMINAL
    : No_Terminal nameNonTerminal { $$ = $2; }
;

SIMBOLO_INICIAL
    : Initial_Sim nameNonTerminal punto_coma { addToArray(nonTerminalsUsados, $2); }
;

PRODUCCIONES
    : PRODUCCION PRODUCCIONES
    | PRODUCCION
;

PRODUCCION
    : nameNonTerminal doble_arrow LADO_DERECHO {
        addToArray(nonTerminalsUsados, $1);
        addProduccion($1, terminos);
        terminos = new Array;
        noProduccion = 1;
    }
;

LADO_DERECHO
    : TERMINO LADO_DERECHO          { terminos.unshift(new Termino($1.n, $1.isT, noProduccion)); }
    | TERMINO pipe OTRO             { terminos.unshift(new Termino($1.n, $1.isT, ++noProduccion)); }
    | TERMINO punto_coma            { terminos.unshift(new Termino($1.n, $1.isT, noProduccion)); }
    | lambda punto_coma             { terminos.unshift(new Termino('lambda', true, noProduccion)); }
;

OTRO
    : TERMINO OTRO          { terminos.unshift(new Termino($1.n, $1.isT, noProduccion)); }
    | TERMINO pipe OTRO     { terminos.unshift(new Termino($1.n, $1.isT, ++noProduccion)); }
    | TERMINO punto_coma    { terminos.unshift(new Termino($1.n, $1.isT, ++noProduccion)); }
    | lambda punto_coma     { terminos.unshift(new Termino('lambda', true, ++noProduccion)); }
;

TERMINO
    : nameTerminal      { addToArray(terminalesUsados, $1); $$ = {n: $1, isT: true}; }
    | nameNonTerminal   { addToArray( nonTerminalsUsados, $1); $$ = {n: $1, isT: false}; }
;