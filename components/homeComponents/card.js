export const card = (id, imagen, titulo, descripcion, precio, estado) => {
  const stock = estado ? 'Sí' : 'No';
  const colorstock = stock == 'Sí' ? 'text-green-600' : 'text-red-600';

  return `
  <div id="product-${id}" class="bg-gray-800 shadow-md rounded-lg overflow-hidden text-white">
    <img src="${imagen}" alt="${titulo}" class="h-48 w-full object-cover">
    <div class="p-4">
      <h3 class="product-name text-lg font-semibold text-white">${titulo}</h3>
      <p class="text-gray-300">${descripcion}</p>
      <p class="product-price text-gray-100 font-bold">$${precio.toFixed(2)}</p>
      <div class="flex items-center mt-4">
        <button data-id="${id}" class="decrement-btn bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded">-</button>
        <input type="text" id="quantity-${id}" value="1" class="w-12 text-center mx-2 border border-gray-600 rounded bg-gray-900 text-white" readonly>
        <button data-id="${id}" class="increment-btn bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded">+</button>
      </div>
      <button data-id="${id}" class="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded add-to-cart-btn">Agregar al Carrito</button>
    </div>
  </div>
`;
};


