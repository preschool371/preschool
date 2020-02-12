import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import Helmet from 'react-helmet'
import ArticleTemplate from '../components/ArticleTemplate'
import Layout from '../components/Layout'

const ArticlePage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | Przedszkole nr 371</title>
      </Helmet>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                content={post.html}
                contentComponent={HTMLContent}
                cover={post.frontmatter.cover}
                meta_desc={post.frontmatter.meta_description}
                title={post.frontmatter.title}
                images={post.frontmatter.album ? post.frontmatter.album : null}
              />
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "pl")
        title
        cover
        meta_description
        album
      }
    }
  }
`
