let numeroIngresadoStr = 0 // global
let enOperacion = false;

function digitoOnClick(event) {
    const but = event.target
    const numero = but.innerText

    const input = document.getElementById("txt_numeros")
    
    if (input.value == "0" || enOperacion) {
        input.value = numero
        enOperacion = false
    }else {
        //input.value = input.value + numero
        input.value += numero
    }
}

const operacionOnClick = (event) => {
    const but = event.target
    const tipoOperacion = but.innerText;

    const input = document.getElementById("txt_numeros")
    if (tipoOperacion == "C") {
        input.value = "0"
    }else if (tipoOperacion == "+") {
        numeroIngresadoStr = input.value
        enOperacion = true;
    }else if (tipoOperacion == "=") {
        const resultado = parseInt(input.value) + parseInt(numeroIngresadoStr)
        input.value = resultado.toString()
    }
}

const main = function() {
    // Registrar los eventos click de los botones
    document.getElementById("but0").onclick = digitoOnClick
    document.getElementById("but1").onclick = digitoOnClick
    document.getElementById("but2").onclick = digitoOnClick
    document.getElementById("but3").onclick = digitoOnClick
    document.getElementById("but4").onclick = digitoOnClick
    document.getElementById("but5").onclick = digitoOnClick
    document.getElementById("but6").onclick = digitoOnClick
    document.getElementById("but7").onclick = digitoOnClick
    document.getElementById("but8").onclick = digitoOnClick
    document.getElementById("but9").onclick = digitoOnClick

    document.getElementById("butC").onclick = operacionOnClick
    document.getElementById("butIgual").onclick = operacionOnClick
    document.getElementById("butMas").onclick = operacionOnClick
}

main()