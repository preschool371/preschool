import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import MissionPageTemplate from '../components/MissionPageTemplate'

const MissionPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <MissionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

MissionPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MissionPage

export const missionPageQuery = graphql`
  query MissionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
      }
    }
  }
`
