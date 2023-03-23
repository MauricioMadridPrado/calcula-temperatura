const form = document.getElementById('semana__container')
const datas = [
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sabado',
    'domingo'
]
criaAsDatas(datas)
function criaAsDatas(datas) {

    datas.forEach(data =>
    form.innerHTML +=
    `
        <div class="dia">
            <label class="dia__nome" for="data">${data}</label>
            <input class="dia__input" type="text" name="data">
        </div>
    `
    )
}