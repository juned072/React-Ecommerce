import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import CartPage from "../components/CartPage";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchQuerry, setSearchQuerry] = useState("");
  const [filteredCategory, setFilteredCategory] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((error) => console.log("Error :", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategory(res.data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuerry(e.target.value);
  };

  const filteredSearch = product
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuerry.toLowerCase())
    )
    .filter((item) =>
      filteredCategory ? item.category === filteredCategory : true
    );

  const handleFilterCategory = (item) => {
    setFilteredCategory(item === filteredCategory ? null : item);
  };

  return (
    <div>
      <Sidebar
        category={category}
        handleFilterCategory={handleFilterCategory}
      />
      <SearchBox handleSearch={handleSearch} searchQuerry={searchQuerry} />
      <CartPage />
      <div className="md:ml-56 mt-8">
        {filteredSearch.length === 0 ? (
          <p className="text-center mt-28 text-sm">Loading...</p>
        ) : (
          <>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-5">
              {filteredSearch.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
