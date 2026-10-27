import React from 'react'
import foto1 from "../assets/camera.png"
import foto2 from "../assets/tripod.png"
import foto3 from "../assets/lents.png"
import foto4 from "../assets/micro.png"
import { useState } from 'react'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { AddItem } from './AddItem'

export const CatCar = () => {
    const [products, setProducts] = useState ([
        {name: "Cámara", id: 1, "src": foto1, quantity: 3, description: "Cámara analógica de última generación"},
        {name: "Tripie", id: 2, "src": foto2, quantity: 5, description: "Tripie para cámara y micrófono profesional"},
        {name: "Lente", id: 3, "src": foto3, quantity: 7, description: "Lente de alta resolución para cámara analógica"},
        {name: "Micro", id: 4, "src": foto4, quantity: 2, description: "Micrófono de última generación"}
    ])
    const [productsCart, setProductsCart] = useState([]);
    const addToCart = (id) => {
        console.log(id);
        const product = products.find((product) => (product.id == id));
        console.log(product);
        if (product.quantity == 0) {
            return;
        }
        if (productsCart.find((product) => (product.id == id))) {
            const copyProducts = products.map((product) => {
                if (product.id == id) {
                    product.quantity = product.quantity - 1;
                    return product;
                } else {
                    return product;
                }
            });  
            setProducts(copyProducts);
        } else {
            const copyProduct = {...product, quantity:1};
            const copyProductsCart = [...productsCart, copyProduct];
            setProductsCart(copyProductsCart);
        }
    }
    
    const removeFromCart = (id, quantity) => {
        const product = productsCart.find((product) => (product.id == id));
        const cantidad = product.quantity;
        const copyProducts = products.map((product) => {
            if (product.id == id) {
                product.quantity = product.quantity + 1;
                return product;
            } else {
                return product;
            }
        });  
        setProducts(copyProducts);
        const copyProductsCart = productsCart.filter((product) => (product.id == id));
        setProductsCart(copyProductsCart);
    }

    return (
        <div className = 'bg-blue-300 flex flex-col min-h-screen h-full'>
            <AddItem products={products} setProducts={setProducts}></AddItem>
            <Catalog products={products} addToCart={addToCart}></Catalog>
            <Cart productsCart={productsCart} removeFromCart={removeFromCart}></Cart>
        </div>
    )
}
