import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute= ({children})=>{
    const { user, loading } = useContext(AuthContext);
    const location= useLocation(); // current location
    console.log(location);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user)
    {
        return children;
    }
    // return <Navigate to="/"></Navigate>;
    return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateRoute;