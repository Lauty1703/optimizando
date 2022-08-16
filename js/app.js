


let stockProductos=[{
    id: 1,
    peso:'1kg',
    nombre: 'helado de crema de oreo ',
    codigo: '0111202',
    precio: 2500,
    imagen: './img/oferta1.jpg',
    descripcion_corta: 'helado de crema y oreo de 1 kilo',
    descripcion: 'la mejor combinacion de de galletitas oreo y crema americana'
}, {
    id: 2,
    peso:'1kg',
    nombre: ' cofler dulce de leche ',
    codigo: '2100240',
    precio: 2000,
    imagen: './img/oferta2.jpg',
    descripcion_corta: 'helado cofler de 1 kilo',
    descripcion: 'Heladera Side By Side. Cap.bruta 584L/neta 527L. Color Acero Inoxidable. Controles externos c/display Digital. Fabricadora de Hielo. Alarma de puerta abierta. Luz LED. Estantes de vidrio. Modo vacaciones. EE: A+.'
},{
    id: 3,
    peso:'1kg',
    nombre: 'helado de frutilla y crema',
    codigo: '2195461',
    precio: 1850,
    imagen: './img/oferta3.jpg',
    descripcion_corta: 'helado cofler de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 4,
    peso:'1kg',
    nombre: 'helado de chocolate',
    codigo: '2192034',
    precio: 2000,
    imagen: './img/oferta4.jpg',
    descripcion_corta: 'helado coffee de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 5,
    peso:'1kg',
    nombre: 'galletas de chocolate',
    codigo: '1694810',
    precio: 1850,
    imagen: './img/oferta5.jpg',
    descripcion_corta: 'helado de galletas de chocolate 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 6,
    peso:'1kg',
    nombre: 'helado de galleta de cholate',
    codigo: '1964785',
    precio: 1900,
    imagen: './img/oferta6.jpg',
    descripcion_corta: 'helado nestle de galleta de chocolate de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

},
{
    id: 7,
    peso:'1kg',
    nombre: 'helado de galleta de cholate',
    codigo: '1964785',
    precio: 1900,
    imagen: './img/oferta6.jpg',
    descripcion_corta: 'helado nestle de galleta de chocolate de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

},
{
    id: 8,
    peso:'1kg',
    nombre: 'helado de galleta de cholate',
    codigo: '1964785',
    precio: 1900,
    imagen: './img/oferta1.jpg',
    descripcion_corta: 'helado nestle de galleta de chocolate de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}];
const contenedorProductos=document.getElementById('contenedor-productos')
let carrito=[];
const contenedorCarrito= document.getElementById('contadorCarrito');


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

const agregarAlCarrito=(prodId)=>{
    const item=stockProductos.find((prod)=> prod.id===prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito=()=>{

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
    })

}