import { Navigate } from 'react-router-dom';
import * as authService from '../../services/authService'

const Logout = () => {
    authService.logout();
    
    return <Navigate to='/' replace={true} />;
};

export default Logout;
