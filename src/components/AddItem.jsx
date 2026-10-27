import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useState } from "react";

export const AddItem = () => {
    const {products, setProducts} = useContext(CartContext);
    const [visible, setVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [product, setProduct] = useState({ name: "", description: "", src: null, quantity: 1, id: Date.now()});

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log(file);
            console.log(URL.createObjectURL(file));
            setImage(URL.createObjectURL(file));
            setProduct({ ...product, src: URL.createObjectURL(file) })
        }
    };

    const agregarEquipo = (e) => {
        e.preventDefault();
        const copyProducts = [...products, product]
        setProducts(copyProducts)
        setProduct({
            name: "", description: "", src: null, quantity: 1, id: Date.now()
        })
        setImage(null)
    }
    
    return (
        <div className='w-screen flex justify-center'>
            <div className='flex bg-blue-800 flex-col justify-between items-center shadow-gray-700 border border-blue-950 border-s-gray-800 w-4/5 m-2 p-2 rounded'>
                <div className='w-full flex'>
                    <div className='flex justify-center text-center w-screen'>
                        <p className='font-extrabold text-blue-200 text-xl'><b>--- AGREGAR EQUIPO ---</b></p>
                    </div>
                    <button onClick={() => setVisible(!visible)} className="cursor-pointer text-blue-400">
                        {visible ? "🡹" : "🡻"}
                    </button>
                </div>
                {visible && (
                    <form className='flex flex-col mt-2 font-mono' onSubmit={agregarEquipo}>
                        <label htmlFor="nombre" className='font-bold text-white'><b>Nombre: </b></label>
                            <input id="name" type="text" name="nombre" placeholder="nombre del equipo" className='border bg-white my-2 p-1 rounded' required value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })}/>
                        <label htmlFor="descripcion" className='font-bold text-white'><b>Descripción: </b></label>
                            <textarea id="descripcion" name="descripcion" placeholder="describe el equipo" className='border bg-white my-2 p-1 rounded' required value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })}/>
                        <label htmlFor="cantidad" className='font-bold text-white'><b>Cantidad: </b></label>
                            <input type="number" id="cantidad" name="cantidad" placeholder="cantidad de equipo" className='border bg-white my-2 p-1 rounded' min={1} required value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: Number(e.target.value) })}/>
                        <span className="font-bold text-white block mb-1">Imagen:</span>
                            <label htmlFor="imagen" className="cursor-pointer inline-block bg-white text-gray-500 font-mono my-2 p-1 rounded border  border-blue-950 hover:bg-gray-100 transition-colors">seleccionar imagen</label>
                            <input id="imagen" type="file" accept="image/*" onChange={handleFileChange} className="hidden" name="imagen" required/>
                            <img src={image} alt="" className='w-20 h-20 my-2 object-cover rounded'/>
                        <button type="submit" className='font-serif bg-blue-950 text-white px-6 py-2 my-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95  active:bg-green-600 transition-all duration-150 ease-in-out mt-2'>Agregar</button>
                    </form>
                )}
            </div>
        </div>
    )
}