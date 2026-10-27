import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export const Cart = () => {
  const {productsCart, removeFromCart} = useContext(CartContext);
  const totalObjetos = productsCart.reduce((total, product) => total + Number(product.quantity), 0);

  return (
    <div className = 'flex flex-col bg-blue-800'>
      <p className = 'font-extrabold text-blue-200 text-center text-xl mt-2'><b>--- CARRITO ---</b></p>
      <div className = 'flex flex-wrap justify-center mb-2'>
          {productsCart.map((product) => (
              <div key={product.id} className = 'flex bg-blue-600 text-white gap-1 shadow shadow-gray-700 border border-blue-950 border-s-gray-800 w-1/3 p-2 m-2 items-center flex-col'>
                  <h3 className = 'font-bold text-2xl border-b-2'>{product.name}</h3>
                  <span className = 'size-30'><img src={product.src} alt="imagen"/></span>
                  <span className = 'font-mono'>En carrito: {product.quantity}</span>
                  <span className = 'font-extralight font-serif'>{product.description}</span>
                  <button onClick = {() => removeFromCart(product.id)} className = 'bg-red-300 text-black gap-1 shadow shadow-gray-700 border p-1 pr-3 pl-3 m-1'>Quitar del carrito</button>
              </div>
          ))}
      </div>
      <p className = 'font-mono text-blue-300 m-2'>Objetos en el carrito: {totalObjetos}</p>
    </div>
  )
}
