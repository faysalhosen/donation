import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Donation from "../pages/Donation/Donation";


const MainLayout = () => {
    return (
        <div className="max-w-[1200px] m-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        
        </div>
    );
};

export default MainLayout;