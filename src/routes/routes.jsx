import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/admin/Dashboard";
import Details from "../pages/Details";
import AllProducts from "../pages/admin/AllProducts";
import EditProduct from "../pages/admin/EditProduct";
import Login from "../pages/auth/Login";
import ProtectRoute from "../pages/auth/ProtectRoute";

 const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                index:true,
                element:<Home/>
            },
            {
                path:"/product/:id",
                element:<Details/>,
                loader:({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },
            {
                path:"/auth",
                element:<Login/>
            },
            
            {
                path:"dashboard",
                element: <ProtectRoute><Dashboard/></ProtectRoute>,
                children:[
                    {
                        path:"allproducts",
                        element:<AllProducts/>
                    },
                    {
                        path:"product/edit/:id",
                        element:<EditProduct/>,
                        loader:({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
                    },
                ]
            }
        ]
    }
])

export default routes