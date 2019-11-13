import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.div`

@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
font-family: 'Lato', sans-serif;
display: flex;
color: white;
justify-content: center;
align-items: center;
background: black;
height: 120px;
position: relative;
bottom: 0;
width: 100%;
  
  .header-link{
    color: white;
    text-decoration: none;

    @media(max-width:750px){
      text-decoration: underline;
    }
  }

  .header-link-title{
    color: white;
    text-decoration: none;
  }

  .menu-bar{
  }

  .header-container{
    display: flex;
    width: 92%;
    justify-content: space-between;

    @media(max-width:750px){
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <div className = "footer-container">
      <div classname = "footer-title">
        <Link className = "footer-link-title" to="/">
        </Link>
      </div>
      <div className="social-bar">
        FOOTER
      </div>
    </div>
  </StyledFooter>
)

export default Footer;