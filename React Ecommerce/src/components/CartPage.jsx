import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import CartProduct from "./CartProduct";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [openCart, setOpenCart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);
  const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItem.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );
  const productPrice = totalPrice;
  const formatedPrice = productPrice.toFixed(2);
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={`md:fixed fixed bottom-5 md:right-10 right-3 p-3 bg-purple-700 text-white shadow-md rounded-full cursor-pointer ${
          totalQty > 0 ? "animate-bounce" : ""
        }`}
        onClick={() => setOpenCart(true)}
      >
        <FaCartShopping />
      </div>

      <div
        onClick={() => setOpenCart(false)}
        className={`${
          openCart ? "block" : "hidden"
        } bg-black opacity-50 h-full w-full fixed top-0 left-0`}
      ></div>
      <div
        className={`overflow-y-auto rounded-md bg-white md:w-[600px] w-full md:h-[600px] h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          openCart ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute top-3 right-4 text-xl hover:text-red-500 cursor-pointer"
          onClick={() => setOpenCart(false)}
        >
          <IoMdCloseCircleOutline />
        </div>
        <h1 className="font-semibold text-center p-2">My Cart</h1>
        <div className="p-4">
          {cartItem.length === 0 ? (
            <p className="text-center text-sm">Your Cart is empty!</p>
          ) : (
            <>
              {cartItem.map((item) => {
                return (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    qty={item.qty}
                  />
                );
              })}
            </>
          )}
        </div>
        <div className="bg-white w-full px-5 mt-5 mb-5 ">
          <h3 className="text-purple-800 font-semibold text-lg">
            Items: {totalQty}
          </h3>
          <h1 className="text-purple-800 font-semibold text-lg">
            Totol Price: ${formatedPrice}
          </h1>
          <div className="mt-4">
            <button
              className="w-full bg-purple-800 text-white p-2 rounded-md"
              onClick={() => navigate("/success")}
            >
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
