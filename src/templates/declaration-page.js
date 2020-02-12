import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import DeclarationPageTemplate from '../components/DeclarationPageTemplate'
import Layout from '../components/Layout'

const DeclarationPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | Przedszkole nr 371</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <DeclarationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

DeclarationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DeclarationPage

export const aboutPageQuery = graphql`
  query DeclarationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
      }
    }
  }
`
