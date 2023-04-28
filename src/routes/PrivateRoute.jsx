import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../components/providers/AuthProvider";


//! Private Router banano hoy jno log in kore vitorer sob dekha jay. ta na hole children gula dekha jabe na

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);



    if (loading) {
        return <div>Loading...</div>

    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivateRoute;