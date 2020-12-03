const porta = 3003;
const express = require("express")
const app = express();
const BancoDados = require("./BancoDados")
const exercicio1 = require("../../exercicio1/ex1")

//O ObjBitmapServidor() é minha função main
function ObjBitmapServidor(vetor) {
    return JSON.stringify(BancoDados.salvarBitmap(JSON.parse(exercicio1.elementosValidos(vetor))))
}

app.get("/bitmap", function (req, res, next) {
    res.send(BancoDados.getBitmaps());
})

app.get("/bitmap/:id", function (req, res, next) {
    res.send(BancoDados.getBitmap(req.params.id));
})

app.listen(porta, function (){
    console.log("executando");
})

module.exports = {ObjBitmapServidor}