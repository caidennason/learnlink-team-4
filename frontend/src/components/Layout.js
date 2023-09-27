import { React } from "globalthis/implementation";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
    const settings = useSelector((state) => state.settings.value);

    return (
        <div>
            <Nav settings={settings} />
            <Outlet />
        </div>
    );
}

export default Layout;