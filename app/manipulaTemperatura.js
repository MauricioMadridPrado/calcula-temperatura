
function diaMaisQuente(temperaturas) {

    return temperaturas.reduce((acc, temp) => acc > temp ? acc : temp, 0)
}
function diaMaisFrio(temperaturas) {

    return temperaturas.reduce((acc, temp) => acc < temp ? acc : temp)
}
function mediaNasTemperaturas(temperaturas) {
    console.log(temperaturas.length)
    return ((temperaturas.reduce((a, b) => parseFloat(a) + parseFloat(b),0)) / temperaturas.length).toFixed(2)
}