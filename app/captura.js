
const dias = document.querySelectorAll('.dia__input')
const botao = document.getElementById('botao')
const temperaturas = []

botao.addEventListener('click', (evento) => {


    evento.preventDefault()

    dias.forEach(data => montaArray(data.value))
    function montaArray(data) {
        temperaturas.push(data)
    }
    console.log(temperaturas)

    apresentaMaiorTemperatura(diaMaisQuente(temperaturas))
    apresentamenorTemperatura(diaMaisFrio(temperaturas))
    apresentaMediaTemperatura(mediaNasTemperaturas(temperaturas))

    

})
