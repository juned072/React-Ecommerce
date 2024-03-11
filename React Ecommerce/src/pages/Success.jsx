import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <SyncLoader color="#5c53fc" />
      ) : (
        <>
          <Link to={"/"}>
            <h1 className="fixed top-4 left-5 cursor-pointer flex items-center">
              <AiOutlineHome />
              <p className="text-sm ml-1 mt-[2px]">Home</p>
            </h1>
          </Link>
          <div className="text-center w-80">
            <h1 className="text-xl font-semibold ">Order Successfully</h1>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              temporibus!
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Success;
