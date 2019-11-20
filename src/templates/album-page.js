import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Share from '../components/Share'
import Layout from '../components/Layout'
import AlbumTemplate from '../components/AlbumTemplate'

const AlbumPage = ({ data }) => {
  const { markdownRemark: album } = data

  return (
    <Layout>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <AlbumTemplate
                content={album.html}
                contentComponent={HTMLContent}
                cover={album.frontmatter.cover}
                meta_desc={album.frontmatter.meta_description}
                title={album.frontmatter.title}
                images={album.frontmatter.album ? album.frontmatter.album : null}
              />
              <Share
                title={album.frontmatter.title}
                slug={album.fields.slug}
                excerpt={album.frontmatter.meta_description}
              />
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

AlbumPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allFile: PropTypes.object,
  }),
}

export default AlbumPage

export const albumQuery = graphql`
  query AlbumByID($id: String!) {
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
        album
        meta_description
      }
    }
  }
`

