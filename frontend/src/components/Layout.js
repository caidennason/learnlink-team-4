import { React } from "globalthis/implementation";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { StyledLearnLink } from "./styles/StyledLearnLink";
import { StyledMain } from "./styles/StyledMain";
import { StyledRight } from "./styles/StyledRight";
import Nav from "./Nav";

function Layout() {
    const settings = useSelector((state) => state.settings.value);

    return (
        <StyledLearnLink>
            <Nav settings={settings} />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <StyledRight />
        </StyledLearnLink>
    );
}

export default Layout;