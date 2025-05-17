import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import Home from "../home/Home";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto relative">
            <Navbar />
            <Outlet />
            <Footer />
        </div >
    );
};

export default Root;