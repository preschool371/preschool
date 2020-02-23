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
        a11y_url={post.frontmatter.a11y_url}
        a11y_data_publikacja={post.frontmatter.a11y_data_publikacja}
        a11y_data_aktualizacja={post.frontmatter.a11y_data_aktualizacja}
        statement={post.frontmatter.statement}
        a11y_data_sporzadzenie={post.frontmatter.a11y_data_sporzadzenie}
        audit_method={post.frontmatter.audit_method}
        a11y_osoba={post.frontmatter.a11y_osoba}
        a11y_email={post.frontmatter.a11y_email}
        a11y_telefon={post.frontmatter.a11y_telefon}
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
        a11y_url
        a11y_data_publikacja
        a11y_data_aktualizacja
        statement
        a11y_data_sporzadzenie
        audit_method
        a11y_osoba
        a11y_email
        a11y_telefon
        meta_description
      }
    }
  }
`
