import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const HeroPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 748px;

  h1{
    margin-bottom: 0px;
  }

  width: 600px;
  border: 1px solid black;
  display: flex;
  justify content: center;
  align-items: center;
  margin: 50px auto;
}
`

const FourthPage = () => (
  <Layout>
    <SEO title="Contact" />
  <HeroPages>
    <h1>Contact</h1>
    <div className="contact-form">Form</div>
  </HeroPages>
  </Layout>
)

export default FourthPage