import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {HeroPages} from "../styles/hero";

const Meet = () => (
  <Layout>
    <SEO title="Meet" />
    <HeroPages>
      <div className="hero-1">
        <div className="carousel">Family-Photo</div>
        <div className="hero-breakone">
          <h1 className="logo">Logo</h1>
          <div className="quote-container">Our Family</div>
        </div>
      </div>
      <div className="hero-2">
        <div className="images-grid">
          <div className="image">Image</div>
          <div className="image">Image</div>
          <div className="image">Image</div>
          <div className="image">Image</div>
          <div className="image">Image</div>
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

export default Meet