
function calculo() {

    let bruto = Number(document.getElementById('bruto').value)

    let h_extra = Number(document.getElementById('h_extra').value)

    let h_fds = Number(document.getElementById('h_fds').value)

    let res = document.getElementById('res')


    bruto = bruto / 200
    h_extra = bruto * h_extra
    h_fds = h_fds * (h_extra * bruto/2)
    resultado = h_fds
    
    res.innerHTML += `<p>Seu salário é de: ${resultado.toFixed(2)}</p>`
}

function limpar() {
    res.innerHTML = ""
}

