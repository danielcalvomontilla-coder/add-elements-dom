
const lista = document.getElementById('lista');
const agregar = document.getElementById('agregar');

agregar.addEventListener('click', ( ) => {
   const producto = prompt("añade un producto:");

   if (producto &&  producto.trim() !== '') {
    const li = document.createElement('li');
   li.textContent = producto;
   lista.appendChild(li);
   }   
})






   

