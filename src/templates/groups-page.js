import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import GroupsPageTemplate from '../components/GroupsPageTemplate'
import Layout from '../components/Layout'

const GroupsPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <GroupsPageTemplate
        title={frontmatter.title}
        meta_description={frontmatter.meta_description}
        groups={frontmatter.groups}
      />
    </Layout>
  )
}

GroupsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GroupsPage

export const groupsPageQuery = graphql`
  query GroupsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_description
        groups {
          heading
          groups {
            description
            group_name
            group_teacher
          }
        }
      }
    }
  }
`
