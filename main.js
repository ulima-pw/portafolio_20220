const main = () => {
    /*
    1. Obtener usuario guardado en el localstorage
    2. Pintar en el p el usuario
    */
    const userDataStr = localStorage.getItem("USER_DATA")
    const userData =JSON.parse(userDataStr)
    document.getElementById("nombre_usuario").innerText = `Usuario: ${userData.username}`
}

window.addEventListener("load", main)