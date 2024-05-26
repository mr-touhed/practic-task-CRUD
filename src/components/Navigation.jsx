import { useAuthState,useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.config";


const Navigation = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  console.log(user, "navigation");

    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/">SHOP MERT</Link>
  </div>
  {user ? <div className="flex-none">
    <div className="dropdown dropdown-end px-3">
        <Link to="/dashboard" className="text-base font-bold">Dashboard</Link>
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
       
        <li onClick={signOut}><a>Logout</a></li>
      </ul>
    </div>
  </div> : <Link to='/auth' className="btn ">login</Link>}
</div>
    );
};

export default Navigation;