// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')

let n2 = document.getElementById('n2')

let res = document.getElementById('res')

// Essa função será chamada quando o botão "Somar" for clicado.
function somar() {
    res.innerHTML += `<p>O resultado da soma é:  ${Number(n1.value) + Number(n2.value)}</p>`
    // res.value = Number(n1.value) + Number(n2.value)
}
// Obtém os valores dos campos de entrada n1 e n2 e converte-os em números.
// Realiza a operação de soma e atribui o resultado ao campo de entrada res.

function subtrair() {
    res.innerHTML += `<p>O resultado da subtração é: ${Number(n1.value) - Number(n2.value)}</p>`
}

function multiplicar() {
    res.innerHTML += `<p>O resultado da multiplicação é: ${Number(n1.value) * Number(n2.value)}</p>`
}

function dividir() {
    if (n2.value == 0) {
        res.innerHTML += `<p>Não é possível divir por 0</p>`
    }

    else {
        res.innerHTML += `<p>O resultado da divisão é: ${Number(n1.value) / Number(n2.value)}</p>`
    }
    
}

function potencia() {
    res.innerHTML += `<p>O resultado da potência é: ${Math.pow(Number(n1.value), Number(n2.value))}</p>`
}

function raiz() {
    res.innerHTML += `<p>O resultado da raiz quadrada de ${n1.value} é: ${Math.sqrt(Number(n1.value))}</p>`
}

function limpar() {
    document.getElementById('res').innerText = ""
}