import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Outlet />
            {/* footer */}
            
        </div>
    );
};

export default Main;