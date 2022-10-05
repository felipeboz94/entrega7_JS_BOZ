//declaración de variables y constantes globales
// array de usuarios auxiliar usados para el contraste

setInterval(() => {
//declaración de botones para eventos
const DateTime = luxon.DateTime
const Duration = luxon.Duration
const ahora = DateTime.now()
const x = DateTime.fromISO(sessionStorage.getItem('fechaLogin'))
const fechaLogueo = Duration.fromObject({years : x.year, months : x.month, days: x.day, hours: x.hour,minutes:  x.minute, seconds : x.second })
let resta = ahora.minus(fechaLogueo)
let div = document.getElementById('duracionLogin')
div.innerText=`Tiempo desde login: ${resta.hour}:${resta.minute}:${resta.second}`

}, 1000)


 
//console.log("El intervalo de hora es "+i)
const PATH_USUARIOS_REGISTRADOS = "json/usuariosRegistrados.json"
let botCerrarSesion= document.getElementById('botCerrarSesion')
botCerrarSesion.addEventListener('click',cerrarSesion)
const {nombre, apellido, mail, usuario, pass, estado, intentos} = constructorUsuarioLoginExitoso()
let div = document.getElementById('infUsuario')
div.innerHTML = `<p><strong> Usuario: ${usuario}</strong></p>
<p><strong> Mail: ${mail}</strong></p>
`    
let bienvenida = document.getElementById('bienvenida')
bienvenida.innerText = ` ¡Bienvenido a la página, ${nombre}!` 


//--------FUNCIONES SOBRE JSON---------------

function aLogin(){
    window.location.href='../login.html'
}

//--------FUNCIONES EN LOGIN---------------

function constructorUsuarioLoginExitoso(){
    let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'))

    return usuarioLogueado
}

function cerrarSesion(){
    Swal.fire({
        title: 'Aviso',
        text: "Seguro que quiere cerrar sesión?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('usuarioLogueado')
            sessionStorage.removeItem('fechaLogin')
            aLogin()
        }
      })

}

