"use client";
import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getCartItems, removeFromcart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromcart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.Inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.Inventory > 1) handleQuantityChange(id, product.Inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.price && item.Inventory) {
        return total + item.price * item.Inventory;
      }
      return total;
    }, 0);
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed.", "success");
        router.push("/checked");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 py-4">
                  <div className="flex items-center space-x-4">
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage).url()}
                        className="w-16 h-16 object-cover rounded-lg"
                        alt={item.title}
                        width={64}
                        height={64}
                      />
                    )}
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.Inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700 mt-4 md:mt-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Total:</h3>
                <p className="text-xl font-bold">${calculateTotal().toFixed(2)}</p>
              </div>

              <button
                onClick={handleProceed}
                className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;