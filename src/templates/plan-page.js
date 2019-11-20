import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import PlanPageTemplate from '../components/PlanPageTemplate'
import Layout from '../components/Layout'

const PlanPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <PlanPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        tasks={post.frontmatter.tasks}
        finalNote={post.frontmatter.final_note}
      />
    </Layout>
  )
}

PlanPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PlanPage

export const planPageQuery = graphql`
  query PlanPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
        tasks {
          task_name
          task_aims
          task_aims_detailed
          activities {
            activity_name
            activity_due
            person_in_charge
            comments
          }
        }
        final_note
      }
    }
  }
`
