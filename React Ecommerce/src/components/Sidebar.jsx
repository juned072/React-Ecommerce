import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ category, handleFilterCategory }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <p
        onClick={() => setOpenMenu(true)}
        className="absolute top-8 right-5 md:hidden"
      >
        <FaBarsStaggered />
      </p>
      <div
        className={`fixed top-0 left-0 md:w-52 bg-gray-300 h-full md:block  ${
          openMenu ? "block w-full h-64" : "hidden"
        }`}
      >
        <Link to={"/"}>
          <h1 className="text-center p-2 md:block hidden">Filter Category</h1>
        </Link>
        <p
          className="md:hidden absolute top-8 right-5 text-lg"
          onClick={() => setOpenMenu(false)}
        >
          <IoClose />
        </p>
        <div className="mt-20">
          {category.length === 0 ? (
            <p className="text-center font-semibold text-lg">Loading...</p>
          ) : (
            <>
              {category.map((item) => {
                return (
                  <ul key={item}>
                    <li
                      className="hover:bg-gray-500 hover:text-white cursor-pointer p-2 uppercase text-sm"
                      onClick={() => handleFilterCategory(item)}
                    >
                      {item}
                    </li>
                  </ul>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
