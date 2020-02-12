import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Content from '../Content'

const HomePageTemplate = ({
  title,
  meta_description,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <main role='main' id='main'>
        <section className='hero is-primary is-bold is-medium'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title transparent-heading'>
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <PageContent className='content' content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default HomePageTemplate
