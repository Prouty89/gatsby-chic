import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

import styled from "styled-components";

const HeroPages = styled.div`

.hero1{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 902px;
}

.carousel{
  display:flex;
  height: 600px;
  align-items: center;
  justify-content: center;
}

.mantra{
  display: flex; 
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 0px;
}

.quote-container{
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-2{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 902px;
}

.images{
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;

  .image{
    background: black;
    color: white;
    width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.hero-breaktwo{
  display:flex;
  justify-content: space-around;
  width: 90%;
}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroPages>
    <div className="hero-1">
      <div className="carousel">Carousel</div>
      <div className="hero-breakone">
        <h1 className="mantra">The Chic Approach</h1>
        <div className="quote-container">Inspirational Quote</div>
      </div>
    </div>
    <div className="hero-2">
      <div className="images">
        <div className="image">Image</div>
        <h3 className="mantra">Quote on Design Style</h3>
        <div className="image">Image</div>
      </div>
      <div className="hero-breaktwo">
        <div className="about">About me</div>
        <div className="contact">Get in touch</div>
      </div>
    </div>
    </HeroPages>
  </Layout>
)

export default IndexPage
