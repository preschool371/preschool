import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

const HomePage = ({data}) => {
  const {markdownRemark} = data

  return (
    <Layout>
      <HomePageTemplate
        title={markdownRemark.frontmatter.title}
        meta_description={markdownRemark.frontmatter.meta_description}
        contentComponent={HTMLContent}
        content={markdownRemark.html}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
      }
    }
  }
`
