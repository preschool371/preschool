import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ClassesPageTemplate from '../components/ClassesPageTemplate'
import Layout from '../components/Layout'

const ClassesPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | Przedszkole nr 371</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <ClassesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ClassesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClassesPage

export const ClassesPageQuery = graphql`
  query ClassesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
      }
    }
  }
`
