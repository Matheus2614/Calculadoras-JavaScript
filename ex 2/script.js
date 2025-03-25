
function calculo() {
    let salario = Number(document.getElementById('salario').value)

    let res = document.getElementById('res')

    if (salario < 0) {
        res.innerHTML += `<p>Valor inválido</p>`
    }

    else if (salario <= 1200) {
        aumento = salario * 0.16
    }

    else if (salario <= 2100) {
        aumento = salario * 0.13
    }

    else if (salario <= 3000) {
        aumento = salario * 0.1
    }

    else {
        aumento = salario * 0.05
    }

    res.innerHTML += `<p>O aumento é de: ${aumento}</p>`
    res.innerHTML += `<p>Total: ${(aumento) + (salario)}`
}

function limpar() {
    res.innerHTML = ""
}