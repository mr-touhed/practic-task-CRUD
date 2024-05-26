import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (

        <div className="max-w-screen-xl mx-auto ">
                <Navigation/>
            <div className="">
                    <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;