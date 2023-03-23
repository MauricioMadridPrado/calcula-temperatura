const localDaMaiorTemperatura = document.getElementById('reultado__valor__maior')
const localDaMenorTemperatura = document.getElementById('reultado__valor__menor')
const localDaMediaTemperatura = document.getElementById('reultado__valor')

function apresentaMaiorTemperatura(temperatura) {
    
    localDaMaiorTemperatura.innerHTML = `A maior temperatura é ${temperatura}`
}
function apresentamenorTemperatura(temperatura) {
    localDaMenorTemperatura.innerHTML = `A menor temperatura é ${temperatura}`
}
function apresentaMediaTemperatura(temperatura) {
    localDaMediaTemperatura.innerHTML = `A média das temperaturas é ${temperatura}`
}


