import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import SchedulePageTemplate from '../components/SchedulePageTemplate'
import Layout from '../components/Layout'

const SchedulePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <SchedulePageTemplate
        title={frontmatter.title}
        meta_description={frontmatter.meta_description}
        schedule={frontmatter.schedule}
      />
    </Layout>
  )
}

SchedulePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SchedulePage

export const schedulePageQuery = graphql`
  query SchedulePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_description
        schedule {
          heading
          description
          groups {
            group_name
            group_details
            items {
              classes
              class_time1
              class_time2
              class_teacher
            }
          }
        }
      }
    }
  }
`
