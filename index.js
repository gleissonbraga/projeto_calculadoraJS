const main = document.querySelector('main')
const root = document.querySelector('root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')


const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// ativa a funcionalidade aonde clicamos nos valores e eles são representados visualmente na calculadora
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})


// limpa a calculadora
document.getElementById('clear').addEventListener('click', function() {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }

    //adiciona a funcionalidade de excluir pelo backspace o conteudo da calculadora
    if(ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if(ev.key = 'Enter') {
        calculate()
    }
})


// inserindo a funcionalidade no botão igual para trazer o resultado
document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    const result = eval(input.value)
    resultInput.value = result
}