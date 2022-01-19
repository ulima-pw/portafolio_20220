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

    const divNombre = document.getElementById("txt_nombre")
    if (divNombre != null) {
        divNombre.parentElement.removeChild(divNombre)
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

const crearLineaYNombre = () => {
    const hr = document.createElement("hr")
    const body = document.firstElementChild.children[2]
    body.appendChild(hr)

    const div = document.createElement("div")
    div.innerText = "Hernan Quintana"
    div.setAttribute("id", "txt_nombre")
    div.setAttribute("class", "alert alert-primary")
    body.appendChild(div)
}

const crearCajaTexto = () => {
    const input = document.createElement("input")
    input.setAttribute("id", "txt_numeros")
    input.setAttribute("class", "form-control mt-4")
    input.setAttribute("type", "text")
    input.setAttribute("value", "0")

    const body = document.firstElementChild.children[2]
    body.appendChild(input)
}

const crearFilaBotones = (botonInicial) => {
    const div = document.createElement("div")
    div.setAttribute("class", "row mt-2")

    const divHijo1 = document.createElement("div")
    divHijo1.setAttribute("class", "col d-grid")
    const divHijo2 = document.createElement("div")
    divHijo2.setAttribute("class", "col d-grid")
    const divHijo3 = document.createElement("div")
    divHijo3.setAttribute("class", "col d-grid")
    const divHijo4 = document.createElement("div")
    divHijo4.setAttribute("class", "col d-grid")

    if (botonInicial != "C") {
        const butHijo1 = document.createElement("button")
        butHijo1.setAttribute("id", "but" + botonInicial)
        butHijo1.setAttribute("class", "btn btn-success")
        butHijo1.setAttribute("type", "button")
        butHijo1.innerText = botonInicial
        divHijo1.appendChild(butHijo1) 
    
        const butHijo2 = document.createElement("button")
        butHijo2.setAttribute("id", "but" + (parseInt(botonInicial)+1))
        butHijo2.setAttribute("class", "btn btn-success")
        butHijo2.setAttribute("type", "button")
        butHijo2.innerText = parseInt(botonInicial) + 1
        divHijo2.appendChild(butHijo2) 
    
        const butHijo3 = document.createElement("button")
        butHijo3.setAttribute("id", "but" + (parseInt(botonInicial)+2))
        butHijo3.setAttribute("class", "btn btn-success")
        butHijo3.setAttribute("type", "button")
        butHijo3.innerText = parseInt(botonInicial) + 2
        divHijo3.appendChild(butHijo3) 
    }else {
        const butHijo1 = document.createElement("button")
        butHijo1.setAttribute("id", "but" + botonInicial)
        butHijo1.setAttribute("class", "btn btn-success")
        butHijo1.setAttribute("type", "button")
        butHijo1.innerText = botonInicial
        divHijo1.appendChild(butHijo1) 
    
        const butHijo2 = document.createElement("button")
        butHijo2.setAttribute("id", "but0")
        butHijo2.setAttribute("class", "btn btn-success")
        butHijo2.setAttribute("type", "button")
        butHijo2.innerText = "0"
        divHijo2.appendChild(butHijo2) 
    
        const butHijo3 = document.createElement("button")
        butHijo3.setAttribute("id", "butIgual")
        butHijo3.setAttribute("class", "btn btn-success")
        butHijo3.setAttribute("type", "button")
        butHijo3.innerText = "="
        divHijo3.appendChild(butHijo3) 
    }

    
    const butHijo4 = document.createElement("button")
    if (botonInicial == "7") {
        butHijo4.setAttribute("id", "butMas")
        butHijo4.innerText = "+"
    }else if (botonInicial == "4") {
        butHijo4.setAttribute("id", "butMenos")
        butHijo4.innerText = "-"
    }else if (botonInicial == "1") {
        butHijo4.setAttribute("id", "butPor")
        butHijo4.innerText = "*"
    }else if (botonInicial == "C") {
        butHijo4.setAttribute("id", "butEntre")
        butHijo4.innerText = "/"
    }
    
    butHijo4.setAttribute("class", "btn btn-success")
    butHijo4.setAttribute("type", "button")
    divHijo4.appendChild(butHijo4) 

    div.appendChild(divHijo1)
    div.appendChild(divHijo2)
    div.appendChild(divHijo3)
    div.appendChild(divHijo4)

    const body = document.firstElementChild.children[2]
    body.appendChild(div)
}

const main = function() {

    crearCajaTexto()
    crearFilaBotones("7")
    crearFilaBotones("4")
    crearFilaBotones("1")
    crearFilaBotones("C")


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
    document.getElementById("butIgual").addEventListener("click", operacionOnClick)
    document.getElementById("butMas").onclick = operacionOnClick

    // Crear linea y nombre
    crearLineaYNombre();
}

window.onload = main