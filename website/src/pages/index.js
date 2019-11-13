import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

import {HeroPages} from "../styles/hero";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroPages>
    <div className="hero-1">
      <div className="carousel">Carousel</div>
      <div className="hero-breakone">
        <h1 className="mantra">The Chic Approach</h1>
        <div className="quote-container">Client Quote</div>
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
