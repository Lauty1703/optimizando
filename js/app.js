let carrito=[];

let stockProductos=[{
    id: 1,
    peso:'1kg',
    nombre: 'helado de crema de oreo ',
    codigo: '0111202',
    precio: 2500,
    imagen: './img/oferta1.jpg',
    descripcion_corta: 'helado de crema y oreo de 1 kilo',
}, {
    id: 2,
    peso:'1kg',
    nombre: ' cofler dulce de leche ',
    codigo: '2100240',
    precio: 2000,
    imagen: './img/oferta2.jpg',
    descripcion_corta: 'helado cofler de 1 kilo',
},{
    id: 3,
    peso:'1kg',
    nombre: 'helado de frutilla y crema',
    codigo: '2195461',
    precio: 1850,
    imagen: './img/oferta3.jpg',
    descripcion_corta: 'helado cofler de 1 kilo',

}
,{
    id: 4,
    peso:'1kg',
    nombre: 'helado de chocolate',
    codigo: '2192034',
    precio: 2000,
    imagen: './img/oferta4.jpg',
    descripcion_corta: 'helado coffee de 1 kilo',

}
,{
    id: 5,
    peso:'1kg',
    nombre: 'galletas de chocolate',
    codigo: '1694810',
    precio: 1850,
    imagen: './img/oferta5.jpg',
    descripcion_corta: 'helado de galletas de chocolate 1 kilo',

}
,{
    id: 6,
    peso:'1kg',
    nombre: 'helado de galleta de cholate',
    codigo: '1964785',
    precio: 1900,
    imagen: './img/oferta6.jpg',
    descripcion_corta: 'helado nestle de galleta de chocolate de 1 kilo',

},
{
    id: 7,
    peso:'1kg',
    nombre: 'helado de galleta de cholate',
    codigo: '1964785',
    precio: 1900,
    imagen: './img/oferta6.jpg',
    descripcion_corta: 'helado nestle de galleta de chocolate de 1 kilo',

},
{
    id: 8,
    peso:'1kg',
    nombre: 'helado de galleta de cholate',
    codigo: '1964785',
    precio: 1900,
    imagen: './img/oferta1.jpg',

}];
const contenedorProductos=document.getElementById('contenedor-productos')
const contenedorCarrito= document.getElementById('contadorCarrito');
const botonVaciar=document.getElementById('vaciar-carrito')
const contadorCarrito=document.getElementById('contadorCarrito')
const precioTotal=document.getElementById('precioTotal')



const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]



document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('carrito')){
        carrito=JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


botonVaciar.addEventListener('click',()=>{
    carrito.length=0;
    actualizarCarrito()
})

stockProductos.forEach((producto)=>{
    const div=document.createElement('div')
    div.classList.add('producto')
    div.innerHTML=`
    <img src=${producto.imagen} alt="">
    <h3>${producto.nombre}</h3>
    <p>peso: ${producto.peso}</p>
    <p class="precioProducto">precio:$ ${producto.precio} </p>
    <button id="agregar${producto.id}" class="boton-agregar">agregar<i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    const boton=document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click',()=>{
        agregarAlCarrito(producto.id)
    })
})





botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})




const agregarAlCarrito=(prodId)=>{
    const item=stockProductos.find((prod)=> prod.id===prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}


const eliminarDelCarrito=(prodId)=>{
    const item=carrito.find((prof)=> prod.id===prodId)

    const indice=carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}


const actualizarCarrito=()=>{

    contenedorCarrito.innerHTML=""


    carrito.forEach((prod)=>{
        const div=document.createElement('div')
        div.className=('productoEnCarrito')
        div.innerHTML=`
        <p>${prod.nombre}</p>
        <p>precio: ${prod.precio}</p>
        <p>cantidad: <spam id="cantidad"> ${prod.precio} </spam></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito',JSON.stringify(carrito))
    })
    contadorCarrito.innerText=carrito.length
}