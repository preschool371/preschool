import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import GPRPageTemplate from '../components/GprPageTemplate'
import Layout from '../components/Layout'

const GPRPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <GPRPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

GPRPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GPRPage

export const gprPageQuery = graphql`
  query GPRPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
      }
    }
  }
`
