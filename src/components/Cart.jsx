import React from "react";
import emptyCard from "../../assets/images/illustration-empty-cart.svg";

const Cart = ({ cart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.total, 0);
  console.log(cart);

  return (
    <>
      {cart.length ? (
        <div className="p-4 border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex justify-between">
                  <span>
                    {item.product.name} x {item.quantity}
                  </span>
                  <span>${item.total.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col min-w-[20rem]  top-2 right-2 items-center justify-center gap-4  h-72 bg-white rounded-xl ">
          <h1>Your Cart (0)</h1>
          <img src={emptyCard} />
          <p>Your added item will appear here</p>
        </div>
      )}
    </>
  );
};

export default Cart;
