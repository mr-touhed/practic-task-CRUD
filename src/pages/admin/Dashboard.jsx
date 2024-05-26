import { NavLink, Outlet  } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex  items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-40 md:w-80 min-h-[100%] bg-base-200 text-base-content pt-16 flex flex-col gap-4">
      {/* Sidebar content here */}
      <li>
      <NavLink to="/dashboard"  className={({isActive}) => isActive ? "text-yellow-400 uppercase bg-slate-700" : " text-base uppercase"} >profile</NavLink>
      </li>
      <li>
        <NavLink  to="/dashboard/allproducts" className={({isActive}) => isActive ? "text-yellow-400 uppercase bg-slate-700" : " text-base uppercase"} >all products</NavLink>
      </li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;