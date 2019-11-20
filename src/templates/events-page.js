import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import EventsPageTemplate from '../components/EventsPageTemplate'
import Layout from '../components/Layout'

const EventsPage = ({data}) => {
  const {markdownRemark: post, allIcal: events} = data
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <EventsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        events={events.edges}
      />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
      }
    }
    allIcal(filter: { sourceInstanceName: { eq: "events" } }) {
      edges {
        node {
          start
          end
          summary
        }
      }
    }
  }
`

