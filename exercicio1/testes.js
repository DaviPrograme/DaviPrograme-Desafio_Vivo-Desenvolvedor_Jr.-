let ex01 = require("./ex1")

console.log(ex01.elementosValidos([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
console.log(ex01.elementosValidos([25, 30, 5, 2, 3, 17, 8, 8, 21, 16, -1, 15]))
console.log(ex01.elementosValidos([1 ,1, 1 ,1, 1 ,1, 1 ,1, 1 ,1]))
console.log(ex01.elementosValidos([]))
console.log(ex01.elementosValidos(["amora,", "pera", "uva"]))
console.log(ex01.elementosValidos(500))
console.log(ex01.elementosValidos(null))
console.log(ex01.elementosValidos(undefined))
console.log(ex01.elementosValidos(Object))