const perifericos = [
  { id: 1, nombre: 'Teclado mecánico RGB', tipo: 'Teclado', precio: 120 },
  { id: 2, nombre: 'Teclado de membrana', tipo: 'Teclado', precio: 40 },
  { id: 3, nombre: 'Teclado inalámbrico', tipo: 'Teclado', precio: 60 },
  { id: 4, nombre: 'Teclado para juegos retroiluminado', tipo: 'Teclado', precio: 90 },
  { id: 5, nombre: 'Teclado compacto mecánico', tipo: 'Teclado', precio: 100 },
  { id: 6, nombre: 'Teclado ergonómico con reposamuñecas', tipo: 'Teclado', precio: 130 },
  { id: 7, nombre: 'Teclado mecánico tenkeyless', tipo: 'Teclado', precio: 110 },
  
  { id: 8, nombre: 'Ratón gaming con iluminación RGB', tipo: 'Mouse', precio: 50 },
  { id: 9, nombre: 'Ratón óptico ergonómico', tipo: 'Mouse', precio: 25 },
  { id: 10, nombre: 'Ratón inalámbrico compacto', tipo: 'Mouse', precio: 30 },
  { id: 11, nombre: 'Ratón para juegos con 12 botones programables', tipo: 'Mouse', precio: 70 },
  { id: 12, nombre: 'Ratón ambidiestro', tipo: 'Mouse', precio: 40 },
  { id: 13, nombre: 'Ratón con sensor de alta precisión', tipo: 'Mouse', precio: 60 },
  { id: 14, nombre: 'Ratón vertical para reducir el estrés', tipo: 'Mouse', precio: 35 },
  
  { id: 15, nombre: 'Auriculares con sonido envolvente 7.1', tipo: 'Auriculares', precio: 100 },
  { id: 16, nombre: 'Auriculares inalámbricos con cancelación de ruido', tipo: 'Auriculares', precio: 150 },
  { id: 17, nombre: 'Auriculares con micrófono retráctil', tipo: 'Auriculares', precio: 80 },
  { id: 18, nombre: 'Auriculares estilo retro', tipo: 'Auriculares', precio: 70 },
  { id: 19, nombre: 'Auriculares con iluminación RGB', tipo: 'Auriculares', precio: 90 },
  { id: 20, nombre: 'Auriculares para streaming con calidad de estudio', tipo: 'Auriculares', precio: 130 },
  { id: 21, nombre: 'Auriculares in-ear para gaming', tipo: 'Auriculares', precio: 60 },
  
  { id: 22, nombre: 'Mousepad extendido con diseño personalizado', tipo: 'Mousepad', precio: 25 },
  { id: 23, nombre: 'Mousepad con superficie texturizada', tipo: 'Mousepad', precio: 15 },
  { id: 24, nombre: 'Mousepad con base de goma antideslizante', tipo: 'Mousepad', precio: 20 },
  { id: 25, nombre: 'Mousepad XL para teclado y ratón', tipo: 'Mousepad', precio: 30 },
  { id: 26, nombre: 'Mousepad con ilustraciones de juegos', tipo: 'Mousepad', precio: 18 },
  { id: 27, nombre: 'Mousepad con carga inalámbrica integrada', tipo: 'Mousepad', precio: 40 },
  { id: 28, nombre: 'Mousepad ergonómico con soporte para muñeca', tipo: 'Mousepad', precio: 22 },
];

function mostrarProductos(arrayProductos) {
  const divProductos = document.getElementById('lista-productos');
  divProductos.innerHTML = '';

  arrayProductos.forEach(periferico => {
    const divProducto = document.createElement('div');
    divProducto.innerHTML = `
      <h3>${periferico.nombre}</h3>
      <p>Tipo: ${periferico.tipo}</p>
      <p>Precio: $${periferico.precio}</p>
    `;
    divProductos.appendChild(divProducto);
  });
}

function filtrarPorTipo(tipo) {
  const productosFiltrados = perifericos.filter(periferico => periferico.tipo === tipo);
  return productosFiltrados;
}
  
mostrarProductos(perifericos);


const mensajeBienvenida = "Bienvenido a RedCats Store. Por favor, selecciona el tipo de periférico que buscas (Teclado, Mouse, Auriculares, Mousepad)";
const tipoBuscado = prompt(mensajeBienvenida);

if (tipoBuscado) {
  const productosFiltradosPorTipo = filtrarPorTipo(tipoBuscado);
  mostrarProductos(productosFiltradosPorTipo);
  alert(`Esta es nuestra lista de ${tipoBuscado}`);
}
