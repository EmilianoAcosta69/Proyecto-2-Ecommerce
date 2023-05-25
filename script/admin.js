let listaProductos = [];

const producto = {
    id: '',
    codigo: '',
    nombre: '',
    precio: '',
    // categoria: '',
    imagen: '',
    // descripcion: '',
    cantidad: ''
}

let editando = false;

const formCargarProducto = document.querySelector('#formCargarProducto');
const codigoInput = document.querySelector('#codigoProducto');
const nombreInput = document.querySelector('#nombreProducto');
const precioInput = document.querySelector('#precioProducto');
const cantidadInput = document.querySelector('#cantidadProducto');
const imagenInput = document.querySelector("#urlImagen");
const btnAgregar = document.querySelector('#btnAgregar');

formCargarProducto.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(codigoInput.value === '' || nombreInput.value === '' || precioInput.value === '' || cantidadInput.value === '' || imagenInput.value === ''){
        alert('Todos los campos son obligatorios.');
        return;
    }

    if(editando){
        editarProducto();
        editando = false;
    }else{
        producto.id = Date.now();
        producto.codigo = codigoInput.value;
        producto.nombre = nombreInput.value;
        producto.precio = precioInput.value;
        producto.cantidad = cantidadInput.value;
        producto.imagen = imagenInput.value;

        agregarProducto();
    }

}

function agregarProducto(){

    listaProductos.push({...producto});

    mostrarProductos();
    formCargarProducto.reset();
    limpiarProducto();
}

function limpiarProducto(){
    producto.id = '';
    producto.codigo = '';
    producto.nombre = '';
    producto.precio = '';
    producto.cantidad = '';
    producto.imagen = '';
}

function mostrarProductos(){

    limpiarHTML();

    const divProductos = document.querySelector('.div-productos');
    
    listaProductos.forEach( productos => {
        const {id,codigo,nombre,precio,cantidad,imagen} = productos;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${codigo} - ${nombre} - $${precio} - ${cantidad} Unidades ${imagen}`;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarProducto(productos);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarProducto(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divProductos.appendChild(parrafo);
        divProductos.appendChild(hr);
    });
}

function cargarProducto(productos){
    const {id,codigo,nombre,precio,cantidad,imagen} = productos;

    codigoInput.value = codigo;
    nombreInput.value = nombre;
    precioInput.value = precio;
    cantidadInput.value = cantidad;
    imagenInput.value = imagen;

    producto.id = id;

    formCargarProducto.querySelector('button[type="submit"]').textContent = 'Actualizar';
    editando = true;
}

function editarProducto(){
    producto.codigo = codigoInput.value;
    producto.nombre = nombreInput.value;
    producto.precio = precioInput.value;
    producto.cantidad = cantidadInput.value;
    producto.imagen = imagenInput.value;

    listaProductos.map( productos =>{
        if(productos.id === producto.id){
            productos.id = producto.id;
            productos.codigo = producto.codigo;
            productos.nombre = producto.nombre;
            productos.precio = producto.precio;
            productos.cantidad = producto.cantidad;
            productos.imagen = producto.imagen;
        }
    });

    limpiarHTML();
    mostrarProductos();
    formCargarProducto.reset();
    formCargarProducto.querySelector('button[type="submit"]').textContent = 'Agregar';
    editando = false;
}

function eliminarProducto(id){
    listaProductos = listaProductos.filter(productos => productos.id !== id);
    const confirmacion = confirm('Esta seguro de eliminar este producto?');
        if(confirmacion == true){
            limpiarHTML();
            mostrarProductos();
        }else{
            return;
        }
    }
    

function limpiarHTML(){
    
    const divProductos = document.querySelector('.div-productos');
    while(divProductos.firstChild){
        divProductos.removeChild(divProductos.firstChild);
    }
}





































































// function agregarProducto(event){
    
//     event.preventDefault();
//     const producto = document.querySelectorAll('#codigoProducto , #nombreProducto,#precioProducto,#urlImagen,#categoriaProducto,#cantidadProducto,#descripcionProducto');
//     const listaProductos = producto.value;
//     const newProducto = document.createElement('div');
//     const id = new Date().getTime()
//     newProducto.id = id;
//     newProducto.innerHTML = `
//     <table>
//     <tr> 
//         <th> Codigo </th>
//         <th> Nombre </th>
//         <th> Precio </th>
//         <th> Cantidad </th>
//     </tr>  
//     <tr> 
//         <td>${listaProductos}</td>
//         <td>${listaProductos}</td>
//     </tr>
//     </table>
//     <button class="btn btn-danger ms-auto m-2 d-block" onclick="eliminarProducto()"> Eliminar </button>
//     `;
//     newProducto.classList.add('text-dark' , 'my-2' , 'p-3' ,"rounded")
//     const contenedorProductos = document.querySelector('.contenedorProductos');
//     contenedorProductos.appendChild(newProducto);
//     document.querySelector('form').reset();
// }



// function eliminarProducto(id){
//     const productoEliminado = document.getElementById(id);
//     productoEliminado.remove();
// }









// const formulario = document.getElementById("formCargarProducto");
// const contenedor = document.getElementById("contenedorProductos");
// const alert = document.getElementsByClassName("alert");

// let listaProductos = [];

// const cargarProducto = (codigo,nombre,precio,categoria,imagen,descripcion,cantidad) => {

//     let producto = {
//         codigo: codigo,
//         nombre: nombre,
//         precio: precio,
//         categoria: categoria,
//         imagen: imagen,
//         descripcion: descripcion,
//         cantidad: cantidad,
//     }
//     listaProductos.push(producto);
//     return producto;

// }

// const guardarDatos = () => {
//     localStorage.setItem("productos",JSON.stringify(listaProductos))
//     mostrarDatos();
// }





// formulario.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     let codigoProducto = document.getElementById("codigoProducto").value;
//     let nombreProductoInput = document.getElementById("nombreProducto").value;
//     let precioProductoInput = document.getElementById("precioProducto").value;
//     let categoriaProductoInput = document.getElementById("categoriaProducto").value;
//     let urlImagenInput = document.getElementById("urlImagen").value;
//     let descripcionProductoInput = document.getElementById("descripcionProducto").value;
//     let cantidadProductoInput = document.getElementById("cantidadProducto").value;

//     cargarProducto(codigoProducto,nombreProductoInput,precioProductoInput,categoriaProductoInput,urlImagenInput,descripcionProductoInput,cantidadProductoInput)
//     guardarDatos();
//     formulario.reset();
// })

// document.addEventListener("DOMContentLoaded", mostrarDatos());

