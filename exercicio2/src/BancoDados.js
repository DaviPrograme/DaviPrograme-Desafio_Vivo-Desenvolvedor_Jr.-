/*
 * Eu criei este arquivo para servir como uma especie de "pseudo Banco de dados",
 * então se a minha função pricipal for executada dez vezes ele guardara todos 
 * os resultados e será possivel pesquisar cada resultado pelo "id" da execução
 */

 //esta função gera os ids
const sequencia = {
    _id: 1,
    get id() {return this._id++}
}

const bitmaps = {}

//salva o resultado de cada execução
function salvarBitmap(bitmap) {
    (!bitmap.id) ? bitmap.id = sequencia.id : 0;
    bitmaps[bitmap.id] = bitmap;
    return (bitmap);
}

//serve para caso a pessoa pesquisa uma execução especifica pelo id ela consiga encontrar a mesma
function getBitmap(id) {
    return bitmaps[id] || {}
}

//retorna todos os valores
function getBitmaps() {
    return Object.values(bitmaps);
}

module.exports = {salvarBitmap, getBitmap, getBitmaps};