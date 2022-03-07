import { Link } from "react-router-dom";
const ProductItem = (props) => {
  return (
    <div className="flex items-center justify-center flex-col md:mb-0 mb-4">
      <Link to={`/product/category/${props.name}`} className="w-3/5">
        <div className="overflow-hidden rounded-full">
          <img
            src={props.src}
            alt=""
            className="rounded-full mb-3 object-cover hover:scale-125 hover:translate-x-4 ease-linear duration-300"
          />
        </div>
      </Link>
      <Link to={`/product/category/${props.name}`}>
        <span className="md:text-[20px] text-lg">{props.name}</span>{" "}
      </Link>
    </div>
  );
};
export default ProductItem;
