import React, { useEffect } from "react";
import WebLogo from "../../img/weblogo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Header/Navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
const Success = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Thank you very much!";
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center flex-col mt-10 h-[50vh] px-10 sm:px-0 text-center">
        <img src={WebLogo} alt="" className="w-[50px] h-[50px] object-cover" />
        <p className="my-4 sm:my-2">Successfull</p>
        <p className="my-4 sm:my-2">
          Your order is being prepared. Thank for choosing Organic Shop
        </p>

        <button
          className="px-4 py-1 border-[2px] border-black my-6"
          onClick={history.push("/product/all")}
        >
          Continue Shopping
        </button>
      </div>
    </>
  );
};
export default withRouter(Success);
