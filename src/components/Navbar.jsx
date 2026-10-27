import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

export const Navbar = () => {
    const navigate = useNavigate();
    const {products} = useContext(CartContext);
    return (
        <div className='sticky top-0 left-0 w-full z-50 flex font-extrabold justify-center bg-blue-950 p-1 text-white'>
            <ul className='list-none flex gap-4 font-bold cursor-pointer'>
                <li className = 'font-mono'>
                    <a onClick={()=>navigate("/")}>Catálogo</a>
                </li>
                <li className = 'font-mono'>
                    <h1>|</h1>
                </li>
                <li className = 'font-mono'>
                    <a onClick={()=>navigate("/cart")}>Carrito</a>
                </li>
                <li className = 'font-mono'>
                    <h1>|</h1>
                </li>
                <li className = 'font-mono'>
                    <a onClick={()=>navigate("/add")}>Agregar equipo</a>
                </li>
            </ul>
        </div>
    )
}