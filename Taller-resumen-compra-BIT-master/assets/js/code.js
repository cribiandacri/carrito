let formulario, contador

if (localStorage.getItem("contador") == null) {
    contador = 1
    formulario =[]
} else {
    contador = localStorage.getItem("contador")
    formulario = JSON.parse(localStorage.getItem("Xusuario"))
}
contador = parseInt(contador)

listabtns()
document.querySelector("#formulario").addEventListener("submit",(evento) => {
    evento.preventDefault()
    contador = contador + 1
    let itemnuevo = {id :contador, nombre: evento.target.nuevaX.value}
    formulario.push(itemnuevo)
    localStorage.setItem("Xusuario", JSON.stringify(formulario))
    localStorage.setItem("contador", contador)
    listabtns()
    asignarevento('eliminar')
    
    
})

function listabtns() {
   let  btnquitar = document.querySelector("#contenido")
   btnquitar.innerHTML =''
   formulario.forEach(item => {
    btnquitar.innerHTML += `

    <div>${item.nombre}</div>
    <div>
    <button type="button" class="btn-close botonQuitar" id="contenido"
     data-bs-dismiss="alert" aria-label="Close" data-bs-toggle="tooltip"
      data-bs-placement="left" data-bs-custom-class="custom-tooltip" 
      data-bs-title="Eliminar producto"  data-eiminar="${item.id}"></button>
    </div>              `
   })
}

asignarevento('eliminar')



function asignarevento(tipoboton) {
    if(tipoboton == 'eliminar'){
        let botonesborrar = document.querySelectorAll(".botonQuitar") 
        botonesborrar.forEach(boton => {
            boton.addEventListener("click", (evento) => {
                let busqueda = formulario.findIndex(item => item.id == evento.target.dataset.eliminar)
                console.log(busqueda);
                formulario.splice(busqueda, 1)
                 localStorage.setItem("Xusuario", JSON.stringify(formulario))
                listabtns()
                asignarevento('eliminar')
                

            })
        })
            
        
    }
}

















const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


let botonesControlCantidad = document.querySelectorAll(".botonControl")
botonesControlCantidad.forEach(botoncito => {
    botoncito.addEventListener("click", (evento) => {
        let h5Producto = document.querySelector(`#${evento.target.dataset.idCantidad}`)
        let cantidadActual = h5Producto.innerText
        if (evento.target.dataset.accion == 'restar') {
            if (cantidadActual > 1) {
                cantidadActual = parseInt(cantidadActual) - 1
            }
        } else {
            cantidadActual = parseInt(cantidadActual) + 1
        }
        h5Producto.innerHTML = cantidadActual
    })
});













document.querySelector('#btnBorrarCarro').addEventListener('click', () => {
    Swal.fire({
        title: "Esta seguro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, vaciar carrito",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {

            //aquí va su proceso para borrar el carrito 🙃

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
})