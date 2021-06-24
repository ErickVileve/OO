// usando a notação literal
const obj1 = {}
console.log(obj1)
// obj em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
console.log("-------------")
// funcao construtora
function produto(nome, preco, desconto) {
    this.nome = nome
    this.getprecocomdesconto=()=>{
        desconto = desconto/100
        return preco * (1-desconto)
    }    
}
const p1 = new produto("geladeira",3000,10)
const p2 = new produto("Tv",1500,15)
console.log(p1.nome)
console.log(`Preço final ${p1.getprecocomdesconto()}`)
console.log(p2.nome)
console.log(`Preço final ${p2.getprecocomdesconto()}`)
console.log("------------------------")
// funcao factory
function funcionarios(nome,salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return ((salarioBase/30)*(30-faltas)).toFixed(2)
        }
    }    
}
const fun1 = funcionarios("Erick",10000,2)
console.log(fun1.getSalario())