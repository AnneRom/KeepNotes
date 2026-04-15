import { Navigate } from "react-router-dom";
// import { selectisAuth } from "../redux/auth/selectors";
// import { useSelector } from "react-redux";

const RestrictedRoute = ({ children, redirectTo = "/" }) => {
    // const isAuth = useSelector(selectisAuth);
    const isAuth = true; 

    if (isAuth) {
        return <Navigate to={redirectTo} />;
    }

    return children;
};

export default RestrictedRoute;