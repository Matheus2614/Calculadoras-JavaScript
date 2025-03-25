
function calculo() {
    let quant = Number(document.getElementById('quant').value)
    let dias = Number(document.getElementById('dias').value)
    let res = document.getElementById('res')

    if (quant < 0) {
        res.innerHTML += `<p>Valor inválido</p>`
    }

    else if (quant <= 49) {
        valor = dias * 4.50 * quant
    }

    else if (quant <= 99) {
        valor = dias * 4.10 * quant
    }

    else if (quant <= 149) {
        valor = dias * 3.80 * quant
    }

    else {
        valor = dias * 3.60 * quant
    }

    res.innerHTML += `<p>O valor total é de: ${valor}</p>`

}

function limpar() {
    res.innerHTML = ""
}