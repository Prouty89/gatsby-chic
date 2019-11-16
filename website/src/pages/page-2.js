import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout';
import Pagination from '../components/pagination';
import SEO from '../components/seo';
import Gallery from '../components/gallery';
import config from '../../config/site'

const BG = styled.div`
  background-color: black;
  position: relative;
`

const OuterWrapper = styled.div`
  padding: 0 auto;
  margin: -10rem auto 0 auto;
`

const InnerWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`

const Project = ({ pageContext: { slug, prev, next }, data: { project: postNode, images } }) => {

  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <BG>
        <OuterWrapper>
          <InnerWrapper>
            <Gallery images={images.nodes} text={postNode.body} />
          </InnerWrapper>
          <Pagination next={next} prev={prev} />
        </OuterWrapper>
      </BG>
    </Layout>
  )
}

export default Project

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    project: PropTypes.object.isRequired,
    images: PropTypes.object.isRequired,
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

Project.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const pageQuery = graphql`
  query($absolutePathRegex: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
