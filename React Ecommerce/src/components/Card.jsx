import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CardSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="md:p-0 p-2">
      <div className="md:w-64 w-full rounded-lg shadow-lg overflow-hidden">
        <img src={item.image} className="w-full h-32" />
        <div className="p-3">
          <h1 className="font-semibold text-lg mb-1">
            {item.title.slice(0, 20)}
          </h1>
          <div className="flex justify-between items-center mt-[2px] mb-[2px]">
            <p className="font-semibold text-sm">{item.category}</p>
            <p className="text-base font-semibold text-purple-800">
              ${item.price}
            </p>
          </div>
          <p>{item.description.slice(0, 50)}...</p>
          <div className="mt-2 text-right">
            <button
              className="bg-red-500 text-white text-sm rounded-md p-2"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    price: item.price,
                    qty: 1,
                  })
                );
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
