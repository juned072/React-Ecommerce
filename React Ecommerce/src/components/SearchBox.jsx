const SearchBox = ({ searchQuerry, handleSearch }) => {
  return (
    <div className="md:ml-[500px] ml-8 mt-5">
      <input
        value={searchQuerry}
        onChange={handleSearch}
        type="text"
        placeholder="Search product..."
        className="md:p-3 p-2 bg-gray-100 outline-purple-400 rounded-full md:w-[400px] w-72 shadow-lg"
      />
    </div>
  );
};

export default SearchBox;
