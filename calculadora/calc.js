var a = 5
var b = 6

var SomaFunc = require("./functions/som")
var SubFunc = require("./functions/sub")
var MulFunc = require("./functions/mul")
var DivFunc = require("./functions/div")

console.log( `${a}+${b} = ${SomaFunc(a,b)}, ${a}-${b} = ${SubFunc(a,b)}, ${a}*${b} = ${MulFunc(a,b)}, ${a}/${b} = ${DivFunc(a,b)} `)



/* 

function som(a,b){
    return a+b
}

function sub(){
    return a-b
}

function mul(){
    return a*b
}

function div(){
    return a-b
} 

Essa é maneira que fazemos normalmente, mas com node, vamos repartir as funções para organizar o arquivo
*/