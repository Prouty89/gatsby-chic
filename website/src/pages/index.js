import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

const HeroPages = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
height: 902px;

.carousel{
  display:flex;
  height: 600px;
  align-items: center;
  justify-content: center;
}

.mantra{
  height: 50px;
}

.quote-container{
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroPages className="hero-1">
      <div className="carousel">carousel</div>
      <div className="hero-breakone">
        <h1 className="mantra">The Chic Approach</h1>
        <div className="quote-container">Inspirational Quote</div>
      </div>
    </HeroPages>
  </Layout>
)

export default IndexPage
