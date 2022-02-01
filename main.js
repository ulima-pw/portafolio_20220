const main = () => {
    /*
    1. Obtener usuario guardado en el localstorage
    2. Pintar en el p el usuario
    */
    const userDataStr = localStorage.getItem("USER_DATA")
    const userData =JSON.parse(userDataStr)
    document.getElementById("nombre_usuario").innerText = `Usuario: ${userData.username}`

    // const buLogin = document.getElementById("butLogout")
    // buLogin.addEventListener("click", () => {

    // })

    document.getElementById("butLogout").addEventListener("click", () => {
        localStorage.removeItem("USER_DATA")
        location.href = '/'
    })
}

window.addEventListener("load", main)