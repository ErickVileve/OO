const array = [1,2,3,4,5,6]
const referencia = Math.trunc(array[Math.trunc(array.length/2)])
const min = Math.min(...array)
if(referencia <= min){
    console.log(`O numero do meio é o menor numero do array ${referencia}`)
}else{
    console.log(`O numero do meio NAO é o menor numero do array ${referencia}`)
}

console.log("------------------------------------------")

function carro(marca,valor){
    this.marca=marca,
    this.valor=valor
}
const carro1= new carro("a4",89000)
const carro2= new carro("fusca",3000)
console.log(carro1,carro2)

console.log()