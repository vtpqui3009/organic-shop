import { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NavbarList = () => {
  const [inputValue, setInputValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState([]);
  useEffect(() => {
    const getLoadedProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API}/products?keyword=${inputValue}`
      );
      const responseData = await response.data.products;
      console.log(responseData);
      setLoadedProducts(responseData);
    };
    const timoutId = setTimeout(() => {
      getLoadedProducts();
    }, 500);

    return () => {
      clearTimeout(timoutId);
    };
  }, [inputValue]);
  const handleInputChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setFocus(true);
    }
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loadedProducts);
  };
  return (
    <ul className="flex md:flex-row flex-col md:items-center justify-center">
      <header className="block md:hidden w-full">
        <form className="flex items-center px-4 py-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nhập thực phẩm cần tìm ... "
            className="w-full border-[1px] border-gray-400 text-[12px] px-4 py-[6px] rounded mr-2 outline-none focus:outline-none relative"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button type="submit">
            {" "}
            <SearchIcon className="w-4 h-4 translate-x-[-30px]" />
          </button>
        </form>
        {focus &&
          loadedProducts &&
          loadedProducts?.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <div className="absolute flex gap-4 items-center left-3 top-30 w-[200px] bg-white p-2 hover:bg-gray-200 cursor-pointer z-40">
                <div className="w-[40%]">
                  <img
                    src={product.images[0].url}
                    alt=""
                    className="w-full h-[70px] object-cover"
                  />
                </div>
                <div className="w-[60%]">
                  <div> {product.name}</div>
                  <div>
                    {product.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </header>

      <li className="md:ml-14 md:p-0 p-4 hover:text-green-600 ease-linear duration-300 md:text-base text-sm">
        <Link to="/">Home</Link>
      </li>

      <li className="md:ml-14 md:p-0 p-4 hover:text-green-600 ease-linear duration-300 md:text-base text-sm">
        <Link to="/product/all">Shop</Link>
      </li>

      <li className="md:ml-14 md:p-0 p-4 hover:text-green-600 ease-linear duration-300 md:text-base text-sm">
        <a href="#home">Contact</a>
      </li>

      <li className="md:ml-14 md:p-0 p-4 hover:text-green-600 ease-linear duration-300 md:text-base text-sm">
        <Link to="/blog/all">Blog</Link>
      </li>

      <Link to="/login">
        <li className="md:hidden block md:p-0 p-4 md:text-base text-sm">
          Log in
        </li>
      </Link>
    </ul>
  );
};
export default NavbarList;
