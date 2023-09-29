import { React } from "globalthis/implementation";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { StyledLearnLink } from "./styles/StyledLearnLink";
import { StyledMain } from "./styles/StyledMain";
import { StyledRight } from "./styles/StyledRight";
import Nav from "./Nav";
import Card from "./Card";
import testImg from "../images/testImage.jpg"
import settingsSlice from "../redux/settingsSlice";

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
            <StyledRight />
        </StyledLearnLink>
    );
}

export default Layout;