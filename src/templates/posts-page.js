import React, { Component } from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/aktualnosci/${props.url}`} className='button is-rounded'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button is-rounded'>
        {props.text}
      </span>
    )
  }
}

export default class PostsPage extends Component {
  render () {
    const { pageContext } = this.props
    const { group, index, first, last } = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }

    return (
      <Layout>
        <Helmet>
          <title>Aktualności | Przedszkole nr 371</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
        <section className='section'>
          <div className='container'>
            <div className='section'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='content'>
                    <div>
                      <h2 className='has-text-weight-semibold is-size-2'>
                        Aktualności</h2>
                      <PostCard posts={group} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink test={first} url={previousUrl} text='poprzednia strona' />
            <PaginationLink test={last} url={nextUrl} text='następna strona' />
          </div>
        </section>
      </Layout>
    )
  }
}
