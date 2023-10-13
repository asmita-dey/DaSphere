import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { CgTemplate } from "react-icons/cg";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src = "./images/logo1.png" alt="my logo img" className = 'navbar-logo'/>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 1rem;
  }
  .navbar-logo{
    position: relative;
    display: block;
    top: 20px;
    left: 0;
    max-width: 400px;
  }
`;
export default Header;