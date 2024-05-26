import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ProtectRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);

    if(loading) return 
    if(!user) return <Navigate to="/auth" replace/>
    return (
        children
    );
};

export default ProtectRoute;