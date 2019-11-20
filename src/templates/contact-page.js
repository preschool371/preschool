import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Layout from '../components/Layout'

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_description={frontmatter.meta_description}
        e_mail_1={frontmatter.e_mail_1}
        e_mail_2={frontmatter.e_mail_2}
        phone={frontmatter.phone}
        head={frontmatter.head}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_description
        e_mail_1
        e_mail_2
        phone
        head
      }
    }
  }
`
