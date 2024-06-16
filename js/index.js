import { calculate } from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"


// ativa a funcionalidade aonde clicamos nos valores e eles são representados visualmente na calculadora
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPress)
})


// limpa a calculadora
document.getElementById('clear').addEventListener('click',handleClearButton)
document.getElementById('input').addEventListener('keydown', handleTyping)
// inserindo a funcionalidade no botão igual para trazer o resultado
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)