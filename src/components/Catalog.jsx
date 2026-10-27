import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Catalog = () => {
  const {products, addToCart} = useContext(CartContext);
  return (
    <div className = 'flex flex-col bg-blue-400 center'>
      <p className = 'font-extrabold text-blue-900 text-center text-xl mt-2'><b>--- CATÁLOGO ---</b></p>
      <div className = 'flex flex-wrap justify-center mb-2'>
          {products.map((product) => (
              <div key={product.id} className = 'flex bg-blue-600 text-white gap-1 shadow shadow-gray-700 border border-blue-950 border-s-gray-800 w-1/3 p-2 m-2 items-center flex-col'>
                  <h3 className = 'font-bold text-2xl border-b-2'>{product.name}</h3>
                  <span className = 'size-30'><img src={product.src} alt="imagen"/></span>
                  <span className = 'font-mono'>En existencia: {product.quantity}</span>
                  <span className = 'font-extralight font-serif'>{product.description}</span>
                  <button disabled={product.quantity <= 0} onClick = {() => addToCart(product.id)} className = 'bg-green-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-black gap-1 shadow shadow-gray-700 border p-1 pr-3 pl-3 m-1'>
                    {product.quantity <= 0 ? "Sin existencias" : "Agregar al carrito"}
                  </button>
              </div>
          ))}
      </div>
    </div>
  )
}
