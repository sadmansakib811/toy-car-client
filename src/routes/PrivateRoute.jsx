import  { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
     
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}  replace></Navigate>;
};

export default PrivateRoute;