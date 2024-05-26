import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

const Profile = () => {
    const [user] = useAuthState(auth);
    const {displayName,photoURL,email} = user
    return (
        <div className="flex flex-col items-center  gap-6"> 
                <div>
                <div className="avatar">
                    <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photoURL} />
                    </div>
                    </div>

                    
                </div>
                <h2 className="text-3xl font-thin">{displayName} </h2>
                <h2 className="text-xl ">{email}</h2>
        </div>
    );
};

export default Profile;