const exemplo = function concatena (text){
    return "Olá, " + text + "!"
}
console.log(exemplo("rodrigo")) //Quando eu for passar um argumento que é uma string tenho que colocar ""

const exemplo2 = function concatena2 (text){
    const saudacao = "Olá"
    return [saudacao, text].join(', ').concat("!")
}

//Exemplo1 e Exemplo2 dão a mesma saida.
console.log(exemplo2("rodrigo"))