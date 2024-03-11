import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { removeFromcart, decrementQty, incrementQty } from "../redux/CardSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, price, image, qty, title }) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className="mt-2 mb-5 flex gap-2 rounded-lg shadow-md">
      <img src={image} alt="products" className="w-20 h-16 rounded-lg" />
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold w-52">{title}</h3>
          <MdDeleteOutline
            className="text-xl cursor-pointer hover:text-red-500 absolute right-5"
            onClick={() => {
              dispatch(removeFromcart({ id }));
            }}
          />
        </div>
        <div className="flex justify-between items-center mt-2 mb-2">
          <p>${price}</p>
          <div className="flex items-center justify-between gap-2 absolute right-5">
            <FaMinus
              className="border-2 border-gray-700 rounded-md cursor-pointer hover:border-none p-1 text-xl transition-all ease-linear hover:bg-purple-600 hover:text-white"
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 1)
              }
            />
            <p>{qty}</p>
            <FaPlus
              className="border-2 border-gray-700 rounded-md cursor-pointer hover:border-none p-1 text-xl transition-all ease-linear hover:bg-purple-600 hover:text-white"
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
