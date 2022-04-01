import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Header/Navigation";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
const Cancel = ({ history }) => {
  useEffect(() => {
    document.title = "Cancel Payment";
  }, []);
  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center flex-col mt-10 h-[50vh] px-10 sm:px-0 text-center">
        <p className="my-4 sm:my-2">Your just cancel the payment.</p>

        <button
          className="px-4 py-1 border-[2px] border-black my-6"
          onClick={history.push("/")}
        >
          Back to Homepage
        </button>
      </div>
    </>
  );
};
export default withRouter(Cancel);
