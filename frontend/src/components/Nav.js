import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { StyledNav } from './styles/StyledNav';
import { StyledLogo } from "./styles/StyledLogo";
import Accessibility from './Accessibility';

function Nav() {
    const user = useSelector((state) => state.user.value);
    return (
        <StyledNav>
            <StyledLogo>LearnLink</StyledLogo>
            <Link to={`/user/${user.id}/dashboard`}>Dashboard</Link>
            <Link to={`/user/${user.id}/courses`}>Courses</Link>
            <Link to={`user/${user.id}/messages`}>Messages</Link>
            <Link to={`/user/${user.id}/friends`}>Friends</Link>
            <Link to={`/user/${user.id}/schedule`}>Schedule</Link>
            <Link to={`/user/${user.id}/settings`}>Settings</Link>
            <Accessibility />
        </StyledNav>
    );
}

export default Nav;