import React from 'react'
import { CartContext } from './CartContext'
import { useState } from 'react'
import foto1 from "../assets/camera.png"
import foto2 from "../assets/tripod.png"
import foto3 from "../assets/lents.png"
import foto4 from "../assets/micro.png"

export const CartProvider = ({children}) => {
    const [products, setProducts] = useState ([
        {name: "Cámara", id: 1, src: foto1, quantity: 3, description: "Cámara analógica de última generación"},
        {name: "Tripie", id: 2, src: foto2, quantity: 5, description: "Tripie para cámara y micrófono profesional"},
        {name: "Lente", id: 3, src: foto3, quantity: 7, description: "Lente de alta resolución para cámara analógica"},
        {name: "Micro", id: 4, src: foto4, quantity: 2, description: "Micrófono de última generación"}
    ])
    const [productsCart, setProductsCart] = useState([]);

    const addToCart = (id) => {
        const product = products.find((product) => product.id === id);

        // No se puede agregar si ya no hay existencias en el catálogo.
        if (!product || product.quantity <= 0) {
            return;
        }

        setProducts(products.map((product) =>
            product.id === id
                ? { ...product, quantity: product.quantity - 1 }
                : product
        ));

        const productCart = productsCart.find((product) => product.id === id);

        if (productCart) {
            setProductsCart(productsCart.map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            ));
        } else {
            setProductsCart([...productsCart, { ...product, quantity: 1 }]);
        }
    }

    const removeFromCart = (id) => {
        const productCart = productsCart.find((product) => product.id === id);

        // No se puede quitar si no hay unidades en el carrito.
        if (!productCart || productCart.quantity <= 0) {
            return;
        }

        setProductsCart(productsCart
            .map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
            .filter((product) => product.quantity > 0)
        );

        setProducts(products.map((product) =>
            product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        ));
    }

    return (
        <CartContext.Provider value={{products, setProducts, productsCart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
