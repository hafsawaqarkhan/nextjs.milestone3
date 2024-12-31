"use client";
import React, { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

const Coffee = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const shops: Product[] = [
    { id: "1", name: "Vanilla Bean Frappe", price: 500, image: "/image/01.jpeg" },
    { id: "2", name: "Hazelnut Latte", price: 1450, image: "/image/02.jpeg" },
    { id: "3", name: "Salted Caramel Latte", price: 1200, image: "/image/03.jpeg" },
    { id: "4", name: "Pistachio Latte", price: 800, image: "/image/04.jpeg" },
    { id: "5", name: "Cappuccino", price: 600, image: "/image/05.jpeg" },
    { id: "6", name: "Americano", price: 400, image: "/image/06.jpeg" },
    { id: "7", name: "Spanish Latte", price: 700, image: "/image/07.jpeg" },
    { id: "8", name: "Coconut Frappe", price: 850, image: "/image/08.jpeg" },
    { id: "9", name: "Cinnamon Spice Latte", price: 600, image: "/image/09.jpeg" },
    { id: "10", name: "Iced Mocha", price: 1000, image: "/image/10.jpeg" },
    { id: "11", name: "Raspberry Frappe", price: 1300, image: "/image/11.jpeg" },
    { id: "12", name: "Toffee Nut Latte", price: 1250, image: "/image/12.jpeg" },
  ];

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if product exists
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      {/* Coffee Menu */}
      <h1 className="text-center text-3xl font-bold my-5">Our Coffee Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white p-5 rounded-md shadow-md text-center"
          >
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="mt-4 text-2xl font-bold">{shop.name}</h3>
            <p className="text-black text-xl font-semibold mt-2">
              RS: {shop.price}
            </p>
            <button
              onClick={() => addToCart(shop)}
              className="mt-4 px-4 py-2 bg-[#A77D54] text-white rounded-md hover:bg-[#8A6342]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="px-10 my-10">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-md shadow-sm"
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-600">Price: RS {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-gray-600 font-bold">
                  Total: RS {item.price * item.quantity}
                </p>
              </div>
            ))}
            <div className="text-right font-bold text-lg">
              Grand Total: RS{" "}
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coffee;
