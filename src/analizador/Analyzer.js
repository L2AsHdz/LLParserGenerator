/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Analyzer = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,19],$V1=[1,27],$V2=[1,44],$V3=[1,45],$V4=[1,46],$V5=[1,50],$V6=[18,35],$V7=[9,18,32,33,35],$V8=[1,69],$V9=[1,70],$Va=[1,68],$Vb=[14,45],$Vc=[18,20,45,51,53],$Vd=[1,77];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"WISON_STRUCTURE":4,"EOF":5,"Wison":6,"question_apertura":7,"ANALIZADORES":8,"question_cierre":9,"LEXICO":10,"SINTACTICO":11,"Lex":12,"llave_izq":13,"dos_puntos":14,"TERMINALES":15,"llave_der":16,"TERMINAL":17,"punto_coma":18,"Terminal":19,"nameTerminal":20,"simple_arrow":21,"LEXIC_RULE":22,"caracter_alphanum":23,"keyword":24,"caracter_especial":25,"LEXIC_RULE2":26,"COMBINED_TERMINALS":27,"GRUPO":28,"CLAUSULA":29,"letras":30,"digitos":31,"klenee":32,"mas":33,"COMBINED_TERMINAL":34,"paren_cierre":35,"paren_apertura":36,"LEXIC_RULE3":37,"Syntax":38,"DEFINICION_GRAMATICA":39,"NO_TERMINALES":40,"SIMBOLO_INICIAL":41,"PRODUCCIONES":42,"NO_TERMINAL":43,"No_Terminal":44,"nameNonTerminal":45,"Initial_Sim":46,"PRODUCCION":47,"doble_arrow":48,"LADO_DERECHO":49,"TERMINO":50,"pipe":51,"OTRO":52,"lambda":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"Wison",7:"question_apertura",9:"question_cierre",12:"Lex",13:"llave_izq",14:"dos_puntos",16:"llave_der",18:"punto_coma",19:"Terminal",20:"nameTerminal",21:"simple_arrow",23:"caracter_alphanum",24:"keyword",25:"caracter_especial",30:"letras",31:"digitos",32:"klenee",33:"mas",35:"paren_cierre",36:"paren_apertura",38:"Syntax",44:"No_Terminal",45:"nameNonTerminal",46:"Initial_Sim",48:"doble_arrow",51:"pipe",53:"lambda"},
productions_: [0,[3,2],[4,5],[8,2],[10,6],[15,3],[15,2],[17,4],[22,1],[22,1],[22,1],[22,1],[22,1],[26,2],[26,1],[28,1],[28,1],[29,1],[29,1],[29,1],[27,3],[27,2],[34,2],[37,1],[37,1],[11,8],[39,3],[40,3],[40,2],[43,2],[41,3],[42,2],[42,1],[47,3],[49,2],[49,3],[49,2],[49,2],[52,2],[52,3],[52,2],[52,2],[50,1],[50,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        console.log('\n***************Analisis finalizado***************\n');
        return info;
    
break;
case 7:
 terminalesDeclarados.push($$[$0]); 
break;
case 8: case 9: case 10: case 11: case 15: case 16: case 17: case 18: case 19: case 23: case 29:
 this.$ = $$[$0]; 
break;
case 12:
 this.$ = $$[$0]; terminalCombinado = new Array; 
break;
case 13:

        terminalClausula += $$[$0-1] + $$[$0];
        this.$ = terminalClausula;
        terminalClausula = "";
    
break;
case 14:
 this.$ = $$[$0] 
break;
case 20:

        terminalCombinado.unshift($$[$0-2] + $$[$0-1]);
        this.$ = terminalCombinado.join("");
    
break;
case 21:

        terminalCombinado.unshift($$[$0-1] + $$[$0]);
        this.$ = terminalCombinado.join("");
    
break;
case 22:
 this.$ = $$[$0-1] + $$[$0]; 
break;
case 24:

        this.$ = $$[$0];
        addToArray(terminalesUsados, $$[$0]);
    
break;
case 26:

        info = new InformacionAnalisis(terminalesDeclarados, terminalesUsados,
        nonTerminalsDeclarados, nonTerminalsUsados, producciones);
    
break;
case 27:

        nonTerminalsDeclarados.unshift($$[$0-2]);
    
break;
case 28:

        nonTerminalsDeclarados.unshift($$[$0-1]);
    
break;
case 30:
 addToArray(nonTerminalsUsados, $$[$0-1]); 
break;
case 33:

        addToArray(nonTerminalsUsados, $$[$0-2]);
        addProduccion($$[$0-2], terminos);
        terminos = new Array;
        noProduccion = 1;
    
break;
case 34: case 36: case 38:
 terminos.unshift({name: $$[$0-1].n, isTerminal: $$[$0-1].isT, noProduccion: noProduccion}); 
break;
case 35: case 39:
 terminos.unshift({name: $$[$0-2].n, isTerminal: $$[$0-2].isT, noProduccion: ++noProduccion}); 
break;
case 37:
 terminos.unshift({name: 'lambda', isTerminal: false, noProduccion: noProduccion}); 
break;
case 40:
 terminos.unshift({name: $$[$0-1].n, isTerminal: $$[$0-1].isT, noProduccion: ++noProduccion}); 
break;
case 41:
 terminos.unshift({name: 'lambda', isTerminal: false, noProduccion: ++noProduccion}); 
break;
case 42:
 addToArray(terminalesUsados, $$[$0]); this.$ = {n: $$[$0], isT: true}; 
break;
case 43:
 addToArray( nonTerminalsUsados, $$[$0]); this.$ = {n: $$[$0], isT: false}; 
break;
}
},
table: [{3:1,4:2,6:[1,3]},{1:[3]},{5:[1,4]},{7:[1,5]},{1:[2,1]},{8:6,10:7,12:[1,8]},{9:[1,9]},{11:10,38:[1,11]},{13:[1,12]},{6:[1,13]},{9:[2,3]},{13:[1,14]},{14:[1,15]},{5:[2,2]},{13:[1,16]},{15:17,17:18,19:$V0},{14:[1,20]},{14:[1,21]},{18:[1,22]},{20:[1,23]},{39:24,40:25,43:26,44:$V1},{16:[1,28]},{14:[2,6],15:29,17:18,19:$V0},{21:[1,30]},{14:[1,31]},{41:32,46:[1,33]},{18:[1,34]},{45:[1,35]},{38:[2,4]},{14:[2,5]},{22:36,23:[1,37],24:[1,38],25:[1,39],26:40,27:41,28:42,30:$V2,31:$V3,34:43,36:$V4},{16:[1,47]},{42:48,45:$V5,47:49},{45:[1,51]},{40:52,43:26,44:$V1,46:[2,28]},{18:[2,29]},{18:[2,7]},{18:[2,8]},{18:[2,9]},{18:[2,10]},{18:[2,11]},{18:[2,12]},o($V6,[2,14],{29:53,9:[1,56],32:[1,54],33:[1,55]}),{35:[1,57]},o($V7,[2,15]),o($V7,[2,16]),{20:[1,60],26:59,28:42,30:$V2,31:$V3,37:58},{16:[1,61]},{14:[2,26]},{14:[2,32],42:62,45:$V5,47:49},{48:[1,63]},{18:[1,64]},{46:[2,27]},o($V6,[2,13]),o($V6,[2,17]),o($V6,[2,18]),o($V6,[2,19]),{18:[2,21],27:65,34:43,36:$V4},{35:[2,22]},{35:[2,23]},{35:[2,24]},{9:[2,25]},{14:[2,31]},{20:$V8,45:$V9,49:66,50:67,53:$Va},{45:[2,30]},{18:[2,20]},o($Vb,[2,33]),{18:[1,73],20:$V8,45:$V9,49:71,50:67,51:[1,72],53:$Va},{18:[1,74]},o($Vc,[2,42]),o($Vc,[2,43]),o($Vb,[2,34]),{20:$V8,45:$V9,50:76,52:75,53:$Vd},o($Vb,[2,36]),o($Vb,[2,37]),o($Vb,[2,35]),{18:[1,80],20:$V8,45:$V9,50:76,51:[1,79],52:78,53:$Vd},{18:[1,81]},o($Vb,[2,38]),{20:$V8,45:$V9,50:76,52:82,53:$Vd},o($Vb,[2,40]),o($Vb,[2,41]),o($Vb,[2,39])],
defaultActions: {4:[2,1],10:[2,3],13:[2,2],28:[2,4],29:[2,5],35:[2,29],36:[2,7],37:[2,8],38:[2,9],39:[2,10],40:[2,11],41:[2,12],48:[2,26],52:[2,27],58:[2,22],59:[2,23],60:[2,24],61:[2,25],62:[2,31],64:[2,30],65:[2,20]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const { InformacionAnalisis } = require('../models/analisis/InformacionAnalisis');

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
                producciones.push({izq: leftSide, der: termsAux});
            }
        }
    }
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://Ignorar espacios en blanco
break;
case 1:return 6;
break;
case 2:return 12;
break;
case 3:return 19;
break;
case 4:return 38;
break;
case 5:return 44;
break;
case 6:return 46;
break;
case 7:return 53;
break;
case 8:return 7;
break;
case 9:return 13;
break;
case 10:return 14;
break;
case 11:return 21;
break;
case 12:return 18;
break;
case 13:return 16;
break;
case 14:return 48;
break;
case 15:return 9;
break;
case 16:return 32;
break;
case 17:return 33;
break;
case 18:return 36;
break;
case 19:return 35;
break;
case 20:return "pipe";
break;
case 21://Comentario de una lineal
break;
case 22://Comentario en bloque
break;
case 23:return 20;
break;
case 24:return 45;
break;
case 25:return 23;
break;
case 26:return 25;
break;
case 27:return 30;
break;
case 28:return 31;
break;
case 29:return 24;
break;
case 30:return 5;
break;
case 31:console.log('Error lexico', yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/,/^(?:Wison\b)/,/^(?:Lex\b)/,/^(?:Terminal\b)/,/^(?:Syntax\b)/,/^(?:No_Terminal\b)/,/^(?:Initial_Sim\b)/,/^(?:lambda\b)/,/^(?:¿)/,/^(?:\{)/,/^(?::)/,/^(?:<-)/,/^(?:;)/,/^(?:\})/,/^(?:<=)/,/^(?:\?)/,/^(?:\*)/,/^(?:\+)/,/^(?:\()/,/^(?:\))/,/^(?:\|)/,/^(?:#.*)/,/^(?:[/][*][*][^EOF]*[*][/])/,/^(?:[$]_([a-zA-Z]|[0-9]|_)+)/,/^(?:[%]_([a-zA-Z]|[0-9]|_)+)/,/^(?:'([a-zA-Z]|[0-9])')/,/^(?:'[^[a-zA-Z]')/,/^(?:\[aA-zZ\])/,/^(?:\[0-9\])/,/^(?:'[^\'\n]+')/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Analyzer;
exports.Parser = Analyzer.Parser;
exports.parse = function () { return Analyzer.parse.apply(Analyzer, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}