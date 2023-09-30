import { React } from "globalthis/implementation";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { StyledLearnLink } from "./styles/StyledLearnLink";
import { StyledMain } from "./styles/StyledMain";
import { StyledRightSidebar } from "./styles/StyledRightSidebar";
import Nav from "./Nav";
import Card from "./Card";
import testImg from "../images/testImage.jpg"
import settingsSlice from "../redux/settingsSlice";
import Signup from "./Signup";

function Layout() {
    const settings = useSelector((state) => state.settings.value);

    return (
        <StyledLearnLink 
            settings={settings}
        >
            <Nav />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <StyledRightSidebar>
                <Signup />
            </StyledRightSidebar>
        </StyledLearnLink>
    );
}

export default Layout;