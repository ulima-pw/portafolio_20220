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

const callbackSuccess = (response) => {
    return response.json()
}

const callbackReadResponse = (data) => {
    const arrImagenes = data.images
    let esPrimera = true;
    for (let url of arrImagenes) {
        const div = crearDivImagenCarrusel(url, esPrimera)
        document.getElementById("carrusel").appendChild(div)
        esPrimera = false
    }
}

const callbackError = (error) => {
    console.error(error)
}



const main = () => {
    fetch("http://demo9667197.mockable.io/")
        .then(callbackSuccess)
        .then(callbackReadResponse)
        .catch(callbackError)
}

window.addEventListener("load", main)