const crearDivImagenCarrusel = (urlImagen, esPrimera) => {
    const div = document.createElement("div")
    if (esPrimera) div.setAttribute("class", "carousel-item active")
    else div.setAttribute("class", "carousel-item")

    const img = document.createElement("img")
    img.setAttribute("class", "d-block w-100")
    img.setAttribute("src", urlImagen)

    div.appendChild(img)
    return div

}

const callbackError = (error) => {
    console.error(error)
}

const crearTrProyectos = (proyecto) => {
    /*
    <tr>
      <td>proyecto.nombre</td>
      <td>proyecto.usuario</td>
      <td>proyecto.rating</td>
    </tr>
    */
    const tr = document.createElement("tr")

    const tdNombre = document.createElement("td")
    const tdUsuario = document.createElement("td")
    const tdRating = document.createElement("td")

    tdNombre.innerText = proyecto.nombre
    tdUsuario.innerText = proyecto.usuario
    tdRating.innerText = proyecto.rating

    tr.appendChild(tdNombre)
    tr.appendChild(tdUsuario)
    tr.appendChild(tdRating)

    return tr
}

const cargarDatosAsyncAwait = async () => {
    const response = await fetch("http://demo9667197.mockable.io/") // hago la llamada
    const data = await response.json() // lo vuelvo objeto javascript

    console.log("Termino carga de imagenes")
    const arrImagenes = data.images
    let esPrimera = true;
    for (let url of arrImagenes) {
        const div = crearDivImagenCarrusel(url, esPrimera)
        document.getElementById("carrusel").appendChild(div)
        esPrimera = false
    }

    const responseProyectos = await fetch("http://demo9667197.mockable.io/proyectos")
    const dataProyectos = await responseProyectos.json()

    console.log("Termino carga de proyectos")
    const proyectos = dataProyectos.proyectos

    for (let proy of proyectos) {
        const tr = crearTrProyectos(proy)
        document.getElementById("data_proyectos").appendChild(tr)
    }
}

const cargarDatos = () => {
    fetch("http://demo9667197.mockable.io/")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log("Termino carga de imagenes")
            const arrImagenes = data.images
            let esPrimera = true;
            for (let url of arrImagenes) {
                const div = crearDivImagenCarrusel(url, esPrimera)
                document.getElementById("carrusel").appendChild(div)
                esPrimera = false
            }

            fetch("http://demo9667197.mockable.io/proyectos")
                .then((response) => {
                    return response.json()
                }).then((data) => {
                    console.log("Termino carga de proyectos")
                    console.log(data)
                }).catch(callbackError)
        })
        .catch(callbackError)
}


const main = () => {
    // Cargar primero las imagenes y luego proyectos
    cargarDatosAsyncAwait()
    //cargarProyectos()
    const butLogin = document.getElementById("butLogin")
    butLogin.addEventListener("click", () => {
        const username = document.getElementById("txt_username").value
        localStorage.setItem("USERNAME", username)
        console.log(username)
    })
}

window.addEventListener("load", main)