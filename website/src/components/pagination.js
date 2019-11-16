import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import arrowLeft from '../assets/images/left-chevron.svg'
import arrowRight from '../assets/images/right-chevron.svg'

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  a {
    color: white;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    &:hover {
      color: black;
    }
  }
  justify-items: center;
`

const Prev = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin: 0 1rem 0 0;
  }
`

const Next = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin: 0 0 0 1rem;
  }
  margin-left: auto;
`

const ProjectPagination = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <Link to={prev.fields.slug}>
          <img src={arrowLeft} alt="Arrow Left" />
          {prev.frontmatter.title}
        </Link>
      </Prev>
    )}

    {next && (
      <Next>
        <Link to={next.fields.slug}>
          {next.frontmatter.title}
          <img src={arrowRight} alt="Arrow Right" />
        </Link>
      </Next>
    )}
  </Wrapper>
)

export default ProjectPagination

ProjectPagination.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

ProjectPagination.defaultProps = {
  next: null,
  prev: null,
}