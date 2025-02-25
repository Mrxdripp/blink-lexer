export var TokenType = {

    // Keywords
    Abstract: 'abstract',
    As: 'as',
    Class: 'class',
    Const: 'const',
    Else: 'else',
    Extends: 'extends',
    False: 'false',
    Final: 'final',
    Func: 'func',
    For: 'for',
    If: 'if',
    In: 'in',
    Lazy: 'lazy',
    Let: 'let',
    New: 'new',
    Null: 'null',
    Override: 'override',
    Private: 'private',
    Protected: 'protected',
    Return: 'return',
    Super: 'super',
    To: 'to',
    This: 'this',
    True: 'true',
    Var: 'var',
    While: 'while',


    // Dispatch operators
    Dot: '.',

    // Assignment operators
    LeftArrow: '<-',
    DivEqual: '/=',
    Equal: '=',
    MinusEqual: '-=',
    ModuloEqual: '%=',
    PlusEqual: '+=',
    RightArrow: '->',
    TimesEqual: '*=',

    // Arithmetic operators
    Div: '/',
    Modulo: '%',
    Minus: '-',
    Plus: '+',
    Times: '*',
    
    //Bitwise operators
    Bitwise Or: '|',
    Bitwise And: '&',
    Bitwise Xor: '^',

    // Comparison operators
    DoubleEqual: '==',
    Greater: '>',
    GreaterOrEqual: '>=',
    Less: '<',
    LessOrEqual: '<=',
    NotEqual: '!=',

    // Boolean operators
    Logical And: '&&',
    Logical Not: '!',
    Logical Or: '||',

    // Other operators
    Tilde: '~',
    TildeEqual: '~=',
    Dollar: '$',
    DollarEqual: '$=',
    Caret: '^',
    CaretEqual: '^=',

    // Identifier and Literals
    Identifier: 'identifier',
    Integer: 'integer',
    Decimal: 'decimal',
    String: 'string',

    // Delimiters
    Colon: ':',
    Comma: ',',
    LeftBrace: '{',
    LeftBracket: '[',
    LeftParen: '(',
    Newline: '\n',
    RightBrace: '}',
    RightBracket: ']',
    RightParen: ')',

    // Special token types
    EndOfInput: 'EndOfInput',
    Unrecognized: 'Unrecognized'
};
