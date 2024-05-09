import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            <div className="min-h-[calc(100vh-310px)]">
                <Outlet />
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Main;