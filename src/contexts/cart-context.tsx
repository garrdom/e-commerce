'use client';
import { type PropsWithChildren, createContext, useContext, useState, useEffect } from 'react';
import type { CustomProduct } from '@/src/typings';

// --------------------------------------------------------------------

type Context = {
  products:  Array<CustomProduct>;
  inCart: (id: number) => boolean;
  handleToggleCart: (isInCart: boolean, newProduct: CustomProduct) => void;
};

const CartContext = createContext<Context>({
  products: [],
  inCart: () => false,
  handleToggleCart() {}
});

// --------------------------------------------------------------------

export default function CartProvider(props: PropsWithChildren) {
  const children = props.children;
  const [ products, setProducts ] = useState<Array<CustomProduct>>([]);

  useEffect(() => {
    const cart = _getCartFromLocalStorage();

    if (cart) {
      setProducts(JSON.parse(cart));
    }
  }, []);

  const inCart = (id: number) => {
    return products.some((product) => product.id === id);
  };

  const _getCartFromLocalStorage = () => {
    return localStorage.getItem('cart');
  };

  const _setCartToLocalStorage = (products: Array<CustomProduct>) => {
    localStorage.setItem('cart', JSON.stringify(products));
  };

  const handleToggleCart = (isInCart: boolean, newProduct: CustomProduct) => {
    if (isInCart) {
      setProducts((products) => {
        const productsFiltered = products.filter((product) => product.id !== newProduct.id);
        _setCartToLocalStorage(productsFiltered);

        return productsFiltered;
      });
    } else {
      setProducts((cartProducts) => {
        const newProducts = [ ...cartProducts, newProduct ];
        _setCartToLocalStorage(newProducts);

        return newProducts;
      });
    }
  };

  return (
  <CartContext.Provider value={{ products, inCart, handleToggleCart }}>
   {children}
  </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error('useCartContext must be used within an CartProvider');
  }

  return context;
}
