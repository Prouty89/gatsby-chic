import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const HeroPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 840px;

  h1{
    margin-bottom: 0px;
  }
}
`

const FourthPage = () => (
  <Layout>
    <SEO title="Contact" />
  <HeroPages>
    <h1>Contact</h1>
  </HeroPages>
  </Layout>
)

export default FourthPage