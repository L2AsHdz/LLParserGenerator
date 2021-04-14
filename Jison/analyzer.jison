
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
%start INICIO
%%


INICIO
    : WISON_STRUCTURE EOF {console.log('Analisis finalizado');}
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
    : Terminal nameTerminal simple_arrow LEXIC_RULE
;

LEXIC_RULE
    : caracter_alphanum
    | keyword
    | caracter_especial
    | LEXIC_RULE2
    | COMBINED_TERMINALS
;

LEXIC_RULE2
    : GRUPO CLAUSULA
    | GRUPO
;

GRUPO
    : letras
    | digitos
;

CLAUSULA
    : klenee
    | mas
    | question_cierre
;

COMBINED_TERMINALS
    : COMBINED_TERMINAL paren_cierre COMBINED_TERMINALS
    | COMBINED_TERMINAL paren_cierre
;

COMBINED_TERMINAL
    : paren_apertura LEXIC_RULE3
;

LEXIC_RULE3
    : LEXIC_RULE2
    | nameTerminal
;

SINTACTICO
    : Syntax llave_izq llave_izq dos_puntos DEFINICION_GRAMATICA dos_puntos llave_der llave_der
;

DEFINICION_GRAMATICA
    : NO_TERMINALES SIMBOLO_INICIAL PRODUCCIONES
;

NO_TERMINALES
    : NO_TERMINAL punto_coma NO_TERMINALES
    | NO_TERMINAL punto_coma
;

NO_TERMINAL
    : No_Terminal nameNonTerminal
;

SIMBOLO_INICIAL
    : Initial_Sim nameNonTerminal punto_coma
;

PRODUCCIONES
    : PRODUCCION PRODUCCIONES
    | PRODUCCION
;

PRODUCCION
    : nameNonTerminal doble_arrow LADO_DERECHO
;

LADO_DERECHO
    : TERMINO LADO_DERECHO
    | TERMINO pipe LADO_DERECHO
    | TERMINO punto_coma
;

TERMINO
    : nameTerminal
    | nameNonTerminal
;