import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

// import MenuListComposition from "../components/dropdown";

const Header = ({ siteTitle }) => (
  <globalStyles>
  <StyledHeader>
    <div className = "header-container">
      <div classname = "header-title">
        <Link className = "header-link-title" to="/">
          {siteTitle}
        </Link>
      </div>
      <div className="menu-bar">
        <a target="_blank" href="https://ourchichome.mydomastudio.com/" rel = "noopener" className = "header-link">Login</a>
        <Link className = "header-link" to="/page-4/">Contact</Link>
        {/* <MenuListComposition /> */}
        <Link className = "header-link" to="/page-2/">Our Work</Link>
        <Link className = "header-link" to="/meet/">Meet the Chicoines</Link>
      </div>
    </div>
  </StyledHeader>
  </globalStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.div`

font-family: Radiata;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
background: black;
height: 30px;
box-shadow: 0 4px 12px 1px grey;

@media(max-width:750px){
  height: 160px;
}
  
  .header-link{
    color: white;
    text-decoration: none;

    @media(max-width:750px){
      border-bottom: 2px solid white;
    }
  }

  .header-link-title{
    color: white;
    text-decoration: none;
    text-shadow:5px 5px 10px #00FF00;

    @media(max-width:750px){
      visibility: hidden;
    }
  }

  .menu-bar{
    display: flex;
    width: 400px;
    justify-content: space-between;

    @media(max-width:750px){
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }

  .header-container{
    display: flex;
    width: 85%;
    justify-content: space-between;
  

    @media(max-width:750px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`
