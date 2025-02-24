function SearchBar({
  searchValue,
  setSearchValue,
  handleSearch,
  placeholder = "Search",
  className,
}) {
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (handleSearch) {
      handleSearch(value);
    }
  };

  return (
    <input
      onChange={handleChange}
      className={`py-2  rounded-md text-black shadow-md transition-all duration-200 focus:outline-none ${className}`}
      type="text"
      placeholder={placeholder}
      value={searchValue}
    />
  );
}

export default SearchBar;
